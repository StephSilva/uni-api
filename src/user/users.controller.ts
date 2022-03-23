import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LoginInput } from './interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('/login')
  async login(@Body() payload: LoginInput) {
    const { data, error } = await this.service.findByEmail(payload.email);
    if (error) {
      throw new HttpException('Correo no encontrado', 404);
    }
    if (data.password === payload.password) {
      return { message: 'Inicio de sesion exitoso' };
    } else {
      throw new HttpException('Contraseña incorrecta', 404);
    }
  }
}
