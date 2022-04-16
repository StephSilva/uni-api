import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto } from 'src/login/dto/create-login.dto';
import { Repository } from 'typeorm';
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

  findAll() {
    return this.repositorio.find();
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
