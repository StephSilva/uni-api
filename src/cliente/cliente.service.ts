import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private repositorio: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.repositorio.save(createClienteDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.repositorio.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
