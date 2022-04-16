import { PartialType } from '@nestjs/mapped-types';
import { CreateTabajoRealizadoDto } from './create-trabajo-realizado.dto';

export class UpdateTrabajoRealizadoDto extends PartialType(CreateTabajoRealizadoDto) {}
