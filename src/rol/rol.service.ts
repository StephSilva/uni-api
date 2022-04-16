import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Rol)
    private repositorio: Repository<Rol>,
  ) { }

  create(createRolDto: CreateRolDto) {
    return this.repositorio.save(createRolDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return this.repositorio.update(id, updateRolDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
