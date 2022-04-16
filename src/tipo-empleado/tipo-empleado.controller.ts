import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEmpleadoService } from './tipo-empleado.service';
import { CreateTipoEmpleadoDto } from './dto/create-tipo-empleado.dto';
import { UpdateTipoEmpleadoDto } from './dto/update-tipo-empleado.dto';

@Controller('tipo-empleado')
export class TipoEmpleadoController {
  constructor(private readonly tipoEmpleadoService: TipoEmpleadoService) {}

  @Post()
  create(@Body() createTipoEmpleadoDto: CreateTipoEmpleadoDto) {
    return this.tipoEmpleadoService.create(createTipoEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.tipoEmpleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEmpleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEmpleadoDto: UpdateTipoEmpleadoDto) {
    return this.tipoEmpleadoService.update(+id, updateTipoEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEmpleadoService.remove(+id);
  }
}
