import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
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

  findAll(nombre = "") {
    let filter = {};
    //aplicamos el filtro si la variable nombre contiene algun texto a buscar
    if(nombre.length){
      //Buscamos por ilike para ignorar mayusculas o minusculas
      // usamos el operador % al inicio y al final para buscar en la coincidencia en cualquier parte de la palabra
      filter = { nombre: ILike(`%${nombre}%`) }
    }
    return this.repositorio.find({ where: { ...filter }});
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
