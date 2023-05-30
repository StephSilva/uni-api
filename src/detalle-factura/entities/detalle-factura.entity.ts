import { TipoPago } from './../../tipo-pago/entities/tipo-pago.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { TrabajoRealizado } from '../../trabajo-realizado/entities/trabajo-realizado.entity';
import { EntidadBase } from '../../utilidades/EntidadBase';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Empleado } from '../../empleado/entities/empleado.entity';

@Entity()
export class DetalleFactura extends EntidadBase {
  @Column({ nullable: true })
  subtotal: number;

  @Column({ nullable: true })
  iva: number;

  @Column({ nullable: true })
  total: number;

  @Column({ name: 'clienteId' })
  clienteId: number;

  @Column({ name: 'empleadoId' })
  empleadoId: number;

  @Column({ name: 'tipoPagoId' })
  tipoPagoId: number;

  @OneToMany(
    () => TrabajoRealizado,
    (trabajosRealizados) => trabajosRealizados.detalleFactura,
  )
  trabajosRealizados: TrabajoRealizado[];

  @ManyToOne(() => Cliente, (cliente) => cliente.detalleFactura)
  cliente: Cliente;

  @ManyToOne(() => TipoPago, (tipoPago) => tipoPago.detalleFactura)
  tipoPago: TipoPago;

  @ManyToOne(() => Empleado, (empleado) => empleado.detalleFactura)
  empleado: Empleado;
}
