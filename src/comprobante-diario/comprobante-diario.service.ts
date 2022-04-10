import { Injectable } from '@nestjs/common';
import { CreateComprobanteDiarioDto } from './dto/create-comprobante-diario.dto';
import { UpdateComprobanteDiarioDto } from './dto/update-comprobante-diario.dto';

@Injectable()
export class ComprobanteDiarioService {
  create(createComprobanteDiarioDto: CreateComprobanteDiarioDto) {
    return 'This action adds a new comprobanteDiario';
  }

  findAll() {
    return `This action returns all comprobanteDiario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comprobanteDiario`;
  }

  update(id: number, updateComprobanteDiarioDto: UpdateComprobanteDiarioDto) {
    return `This action updates a #${id} comprobanteDiario`;
  }

  remove(id: number) {
    return `This action removes a #${id} comprobanteDiario`;
  }
}
