import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
import { TipoPago } from './entities/tipo-pago.entity';

@Injectable()
export class TipoPagoService {
  constructor(
    @InjectRepository(TipoPago)
    private repositorio: Repository<TipoPago>,
  ) {}

  create(createTipoPagoDto: CreateTipoPagoDto) {
    return this.repositorio.save(createTipoPagoDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneOrFail(id);
  }

  update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.repositorio.update(id, updateTipoPagoDto);
  }

  remove(id: number) {
    return this.repositorio.softDelete(id);
  }
}
