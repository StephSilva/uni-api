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
    private repository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.repository.save(createClienteDto);
  }

  findAll() {
    return this.repository.find({ relations: ['empresa'] });
  }

  findOne(id: string) {
    return this.repository.findOneOrFail(id);
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.repository.update(id, updateClienteDto);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}
