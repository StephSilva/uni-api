import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTipoTrabajoDto } from './dto/create-tipo-trabajo.dto';
import { UpdateTipoTrabajoDto } from './dto/update-tipo-trabajo.dto';
import { TipoTrabajo } from './entities/tipo-trabajo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoTrabajoService {
  constructor(
    @InjectRepository(TipoTrabajo)
    private repositorio: Repository<TipoTrabajo>,
  ) {}

  create(createTipoTrabajoDto: CreateTipoTrabajoDto) {
    return this.repositorio.save(createTipoTrabajoDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateTipoTrabajoDto: UpdateTipoTrabajoDto) {
    return this.repositorio.update(id, updateTipoTrabajoDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
