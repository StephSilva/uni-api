import { Module } from '@nestjs/common';
import { ComprobanteDiarioService } from './comprobante-diario.service';
import { ComprobanteDiarioController } from './comprobante-diario.controller';
import { ComprobanteDiario } from './entities/comprobante-diario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComprobanteDiario])],
  controllers: [ComprobanteDiarioController],
  providers: [ComprobanteDiarioService],
})
export class ComprobanteDiarioModule {}
