import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTabajoRealizadoDto } from './dto/create-trabajo-realizado.dto';
import { UpdateTrabajoRealizadoDto } from './dto/update-trabajo-realizado.dto';
import { TrabajoRealizado } from './entities/trabajo-realizado.entity';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class TrabajoRealizadoService {
  constructor(
    @InjectRepository(TrabajoRealizado)
    private repositorio: Repository<TrabajoRealizado>,
  ) {}

  create(createTabajoRealizadoDto: CreateTabajoRealizadoDto) {
    return this.repositorio.save(createTabajoRealizadoDto);
  }

  findAll(nombre = "") {
    let filter = {};
    //aplicamos el filtro si la variable nombre contiene algun texto a buscar
    if(nombre.length){
      //Buscamos por ilike para ignorar mayusculas o minusculas
      // usamos el operador % al inicio y al final para buscar en la coincidencia en cualquier parte de la palabra
      filter = { nombre: ILike(`%${nombre}%`) }
    }

    return this.repositorio.find({ relations: ['tipotrabajo_realizado'], where: { ...filter } });
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
