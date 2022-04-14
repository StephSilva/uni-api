import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.repository.save(createRoleDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneOrFail(id);
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.repository.update(id, updateRoleDto);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}
