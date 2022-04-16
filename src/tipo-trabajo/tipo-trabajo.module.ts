import { Module } from '@nestjs/common';
import { TipoTrabajoService } from './tipo-trabajo.service';
import { TipoTrabajoController } from './tipo-trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoTrabajo } from './entities/tipo-trabajo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoTrabajo])],
  controllers: [TipoTrabajoController],
  providers: [TipoTrabajoService]
})
export class TipoTrabajoModule {}
