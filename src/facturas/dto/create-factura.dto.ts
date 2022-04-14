export class CreateFacturaDto {
  fecha: string;
  numeroFactura: string;
  descripcion: string;
  ventasExoneradas: number;
  ventasExentas: number;
  ventasGrabadas: number;
  empresaId: string;
}
