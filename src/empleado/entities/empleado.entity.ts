import { DetalleFactura } from '../../detalle-factura/entities/detalle-factura.entity';
import { TipoEmpleado } from '../../tipo-empleado/entities/tipo-empleado.entity';
import { EntidadBase } from '../../utilidades/EntidadBase';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Empleado extends EntidadBase {
  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  telefono: string;

  @Column()
  cedula: string;

  @Column({ name: 'tipoEmpleadoId' })
  tipoEmpleadoId: number;

  @ManyToOne(() => TipoEmpleado, (tipoEmpleado) => tipoEmpleado.empleados)
  tipoEmpleado: TipoEmpleado;

  @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.empleado)
  detalleFactura: DetalleFactura[];
}
