export class CreateDetalleFacturaDto {
  detalle: Detalle;
  servicios: Servicios[];
}

export interface Detalle {
  clienteId: number;
  empleadoId: number;
  tipoPagoId: number;
}

export interface Servicios {
  cantidad: number;
  precio: number;
  tipoTrabajoId: number;
  isNewRow?: boolean;
}
