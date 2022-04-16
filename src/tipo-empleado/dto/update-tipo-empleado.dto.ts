import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEmpleadoDto } from './create-tipo-empleado.dto';

export class UpdateTipoEmpleadoDto extends PartialType(CreateTipoEmpleadoDto) {}
