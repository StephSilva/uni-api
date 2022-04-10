import { PartialType } from '@nestjs/mapped-types';
import { CreateComprobanteDiarioDto } from './create-comprobante-diario.dto';

export class UpdateComprobanteDiarioDto extends PartialType(CreateComprobanteDiarioDto) {}
