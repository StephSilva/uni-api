import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { TipoTrabajoModule } from './tipo-trabajo/tipo-trabajo.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ClienteModule } from './cliente/cliente.module';
import { TipoPagoModule } from './tipo-pago/tipo-pago.module';
import { TipoEmpleadoModule } from './tipo-empleado/tipo-empleado.module';
import { TrabajoRealizadoModule } from './trabajo-realizado/trabajo-realizado.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { LoginModule } from './login/login.module';
import { typeOrmAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UsuarioModule,
    RolModule,
    TipoTrabajoModule,
    EmpleadoModule,
    ClienteModule,
    TrabajoRealizadoModule,
    TipoPagoModule,
    TipoEmpleadoModule,
    DetalleFacturaModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
