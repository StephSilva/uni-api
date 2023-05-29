import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { CreateTabajoRealizadoDto } from './dto/create-trabajo-realizado.dto';
import { UpdateTrabajoRealizadoDto } from './dto/update-trabajo-realizado.dto';
import { Request, Response } from 'express';
import { TrabajoRealizadoService } from './trabajo-realizado.service';

@Controller('trabajo-realizado')
export class TrabajoRealizadoController {
  constructor(private readonly service: TrabajoRealizadoService) {}

  @Post()
  create(@Body() createTabajoRealizadoDto: CreateTabajoRealizadoDto) {
    return this.service.create(createTabajoRealizadoDto);
  }

  @Get()
  //async findAll(@Req() request: Request, @Res() response: Response) {
  //  try {
  //   const data = await this.trabajorealizadoService.findAll(request.query.filtro as string);
   //  response.status(200).send(data);
  //  } catch (error) {
  //    response.status(400).send("Error al encontrar trabajo");
  //}
 //} 

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
