import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto } from 'src/login/dto/create-login.dto';
import { ILike, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { searchEntityByColumns } from 'src/utilidades';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private repositorio: Repository<Usuario>,
  ) { }

  crear(createUsuarioDto: CreateUsuarioDto) {
    return this.repositorio.save(createUsuarioDto);
  }

  findAll(valueToSearch = "") {
    return this.repositorio.find({
      relations: ['rol'],
      where: [
        { nombre: ILike(`%${valueToSearch}%`) },
        { contrasenia: ILike(`%${valueToSearch}%`) },
        { nombreUsuario: ILike(`%${valueToSearch}%`) },
        {
          rol: {
            nombre: ILike(`%${valueToSearch}%`)
          }
        }
      ]
    });
  }

  buscarPorNombreUsuario(params: CreateLoginDto) {
    return this.repositorio.findOneOrFail({
      where: {
        nombreUsuario: params.nombreUsuario
      }
    });
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
