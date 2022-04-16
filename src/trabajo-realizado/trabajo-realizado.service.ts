import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTabajoRealizadoDto } from './dto/create-trabajo-realizado.dto';
import { UpdateTrabajoRealizadoDto } from './dto/update-trabajo-realizado.dto';
import { TrabajoRealizado } from './entities/trabajo-realizado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrabajoRealizadoService {
  constructor(
    @InjectRepository(TrabajoRealizado)
    private repositorio: Repository<TrabajoRealizado>,
  ) {}

  create(createTabajoRealizadoDto: CreateTabajoRealizadoDto) {
    return this.repositorio.save(createTabajoRealizadoDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateTrabajoRealizadoDto: UpdateTrabajoRealizadoDto) {
    return this.repositorio.update(id, updateTrabajoRealizadoDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
