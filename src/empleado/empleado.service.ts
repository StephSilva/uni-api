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
  ) {}

  create(createEmpleadoDto: CreateEmpleadoDto) {
    return this.repositorio.save(createEmpleadoDto);
  }

  findAll(nombre = "") {
    let filter = {};
    //aplicamos el filtro si la variable nombre contiene algun texto a buscar
    if(nombre.length){
      //Buscamos por ilike para ignorar mayusculas o minusculas
      // usamos el operador % al inicio y al final para buscar en la coincidencia en cualquier parte de la palabra
      filter = { nombre: ILike(`%${nombre}%`) }
    }

    return this.repositorio.find({ relations: ['tipoEmpleado'], where: { ...filter } });
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
