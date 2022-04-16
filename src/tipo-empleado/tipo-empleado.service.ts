import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTipoEmpleadoDto } from './dto/create-tipo-empleado.dto';
import { UpdateTipoEmpleadoDto } from './dto/update-tipo-empleado.dto';
import { Repository } from 'typeorm';
import { TipoEmpleado } from './entities/tipo-empleado.entity';

@Injectable()
export class TipoEmpleadoService {
  constructor(
    @InjectRepository(TipoEmpleado)
    private repositorio: Repository<TipoEmpleado>,
  ) {}

  create(createTipoEmpleadoDto: CreateTipoEmpleadoDto) {
    return this.repositorio.save(createTipoEmpleadoDto);
  }

  findAll() {
     return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateTipoEmpleadoDto: UpdateTipoEmpleadoDto) {
    return this.repositorio.update(id, updateTipoEmpleadoDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
