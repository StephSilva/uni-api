import { Test, TestingModule } from '@nestjs/testing';
import { TipoEmpleadoController } from './tipo-empleado.controller';
import { TipoEmpleadoService } from './tipo-empleado.service';

describe('TipoEmpleadoController', () => {
  let controller: TipoEmpleadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoEmpleadoController],
      providers: [TipoEmpleadoService],
    }).compile();

    controller = module.get<TipoEmpleadoController>(TipoEmpleadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
