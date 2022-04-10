import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { LoginDto } from './dto/login';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return this.autenticacionService.validarUsuario(loginDto);
  }
}
