import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, FilterOptionsDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {}

  buscarPorCorreo = async (correo: string) => {
    try {
      const data = await this.repository.findOneOrFail({
        where: {
          correo,
        },
      });
      return { data };
    } catch (error) {
      return { error: true };
    }
  };

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.repository.save(createUsuarioDto);
  }

  findAll(filterOptions: FilterOptionsDto) {
    return this.repository.find({
      where: filterOptions ?? {},
      relations: ['rol'],
    });
  }

  findOne(id: string) {
    return this.repository.findOneOrFail(id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repository.update({ id }, updateUsuarioDto);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}