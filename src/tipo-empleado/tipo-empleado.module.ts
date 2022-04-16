import { Module } from '@nestjs/common';
import { TipoEmpleadoService } from './tipo-empleado.service';
import { TipoEmpleadoController } from './tipo-empleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEmpleado } from './entities/tipo-empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEmpleado])],
  controllers: [TipoEmpleadoController],
  providers: [TipoEmpleadoService]
})
export class TipoEmpleadoModule {}
