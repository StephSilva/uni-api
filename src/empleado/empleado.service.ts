import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private repositorio: Repository<Empleado>,
  ) { }

  create(createEmpleadoDto: CreateEmpleadoDto) {
    return this.repositorio.save(createEmpleadoDto);
  }

  findAll(valueToSearch = "") {
    return this.repositorio.find({
      relations: ['tipoEmpleado'], where: [
        { nombre: ILike(`%${valueToSearch}%`) },
        { apellido: ILike(`%${valueToSearch}%`) },
        { telefono: ILike(`%${valueToSearch}%`) },
        { cedula: ILike(`%${valueToSearch}%`) },
        {
          tipoEmpleado: {
            nombre: ILike(`%${valueToSearch}%`)
          }
        }
      ]
    });
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.repositorio.update(id, updateEmpleadoDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
