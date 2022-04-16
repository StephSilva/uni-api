import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService, private readonly usuarioService: UsuarioService) { }

  @Post()
  async login(@Body() createLoginDto: CreateLoginDto) {
    const existe = await this.usuarioService.buscarPorNombreUsuario(createLoginDto)
    if(existe && existe.contrasenia === createLoginDto.contrasenia){
      return "Logeado Correctamente"
    }
    throw new HttpException("Error en las credenciales", 400)
  }
}
