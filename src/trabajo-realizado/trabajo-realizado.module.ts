import { Module } from '@nestjs/common';
import { TrabajoRealizadoService } from './trabajo-realizado.service';
import { TrabajoRealizadoController } from './trabajo-realizado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajoRealizado } from './entities/trabajo-realizado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrabajoRealizado])],
  controllers: [TrabajoRealizadoController],
  providers: [TrabajoRealizadoService]
})
export class TrabajoRealizadoModule {}
