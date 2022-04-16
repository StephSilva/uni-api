import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetalleFacturaDto } from './dto/create-detalle-factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle-factura.dto';
import { DetalleFactura } from './entities/detalle-factura.entity';

@Injectable()
export class DetalleFacturaService {

  constructor(
    @InjectRepository(DetalleFactura)
    private repositorio: Repository<DetalleFactura>,
  ) {}

  create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return this.repositorio.save(createDetalleFacturaDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    return this.repositorio.update(id, updateDetalleFacturaDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
