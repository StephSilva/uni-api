import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrabajoRealizadoService } from './trabajo-realizado.service';
import { CreateTabajoRealizadoDto } from './dto/create-trabajo-realizado.dto';
import { UpdateTrabajoRealizadoDto } from './dto/update-trabajo-realizado.dto';

@Controller('trabajo-realizado')
export class TrabajoRealizadoController {
  constructor(private readonly service: TrabajoRealizadoService) {}

  @Post()
  create(@Body() createTabajoRealizadoDto: CreateTabajoRealizadoDto) {
    return this.service.create(createTabajoRealizadoDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrabajoRealizadoDto: UpdateTrabajoRealizadoDto) {
    return this.service.update(+id, updateTrabajoRealizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
