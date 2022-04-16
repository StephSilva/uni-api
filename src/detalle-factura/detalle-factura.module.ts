import { Module } from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFacturaController } from './detalle-factura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from './entities/detalle-factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleFactura])],
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}
