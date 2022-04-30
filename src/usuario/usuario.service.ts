import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto } from 'src/login/dto/create-login.dto';
import { ILike, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private repositorio: Repository<Usuario>,
  ) {}

  crear(createUsuarioDto: CreateUsuarioDto) {
    return this.repositorio.save(createUsuarioDto);
  }

  findAll(nombre = "") {
    // por defecto tenemos el nombre en vacio,
    let filter = {};
    //aplicamos el filtro si la variable nombre contiene algun texto a buscar
    if(nombre.length){
      //Buscamos por ilike para ignorar mayusculas o minusculas
      // usamos el operador % al inicio y al final para buscar en la coincidencia en cualquier parte de la palabra
      filter = { nombre: ILike(`%${nombre}%`) }
    }
    //le pasamos el objeto filter para establecer la condicion
    return this.repositorio.find({ relations: ['rol'], where: { ...filter } });
  }

  buscarPorNombreUsuario(params: CreateLoginDto) {
    return this.repositorio.findOneOrFail({ where: {
      nombreUsuario: params.nombreUsuario
    } });
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repositorio.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
