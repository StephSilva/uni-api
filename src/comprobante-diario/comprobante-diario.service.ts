import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComprobanteDiarioDto } from './dto/create-comprobante-diario.dto';
import { UpdateComprobanteDiarioDto } from './dto/update-comprobante-diario.dto';
import { ComprobanteDiario } from './entities/comprobante-diario.entity';

@Injectable()
export class ComprobanteDiarioService {
  constructor(
    @InjectRepository(ComprobanteDiario)
    private repository: Repository<ComprobanteDiario>,
  ) {}

  create(createComprobanteDiarioDto: CreateComprobanteDiarioDto) {
    return this.repository.save(createComprobanteDiarioDto);
  }

  findAll() {
    return this.repository.find({ relations: ['empresa'] });
  }

  findOne(id: string) {
    return this.repository.findOneOrFail(id);
  }

  update(id: string, updateComprobanteDiarioDto: UpdateComprobanteDiarioDto) {
    return this.repository.update(id, updateComprobanteDiarioDto);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}
