import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrabajoRealizado } from 'src/trabajo-realizado/entities/trabajo-realizado.entity';
import { Repository, getConnection } from 'typeorm';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';
import { DetalleFactura } from './entities/detalle-factura.entity';

@Injectable()
export class DetalleFacturaService {
  constructor(
    @InjectRepository(DetalleFactura)
    private repositorio: Repository<DetalleFactura>,
  ) {}

  async create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    const { detalle, servicios } = createDetalleFacturaDto;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    const { clienteId, empleadoId, tipoPagoId } = detalle;
    await queryRunner.connect();
    try {
      await queryRunner.startTransaction();
      const detalleCreado = await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(DetalleFactura)
        .values({ clienteId, empleadoId, tipoPagoId })
        .execute();
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(TrabajoRealizado)
        .values(
          servicios.map((servicio) => ({
            ...servicio,
            detalleFacturaId: detalleCreado.identifiers[0].id,
          })),
        )
        .execute();
      await queryRunner.commitTransaction();
      return { id: detalleCreado.identifiers[0].id };
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.repositorio.find({
      relations: ['trabajosRealizados', 'cliente', 'tipoPago', 'empleado'],
    });
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id, {
      relations: ['trabajosRealizados', 'cliente', 'tipoPago', 'empleado'],
    });
  }

  async update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    const { detalle, servicios } = updateDetalleFacturaDto;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    const { clienteId, empleadoId, tipoPagoId } = detalle;

    const nuevas = servicios
      .filter((i) => i.isNewRow)
      .map((i) => {
        delete i.isNewRow;
        return i;
      });

    const actualizar = servicios
      .filter((i) => !i.isNewRow)
      .map((i) => {
        delete i.isNewRow;
        return i;
      });

    try {
      await queryRunner.startTransaction();
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(TrabajoRealizado)
        .values(
          nuevas.map((servicio) => ({
            ...servicio,
            detalleFacturaId: id,
          })),
        )
        .execute();

      await this.bulkUpdate(actualizar);
      await queryRunner.commitTransaction();
      return { id };
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async bulkUpdate(actualizar: any[]) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    let promises = actualizar.map((update) => {
      const param = { id: update.id };
      delete update.id;
      return queryRunner.manager
        .getRepository(TrabajoRealizado)
        .update(param, update);
    });
    await Promise.all(promises);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
