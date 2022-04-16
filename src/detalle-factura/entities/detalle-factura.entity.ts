import { TipoPago } from './../../tipo-pago/entities/tipo-pago.entity';
import { Cliente } from "src/cliente/entities/cliente.entity";
import { TrabajoRealizado } from "src/trabajo-realizado/entities/trabajo-realizado.entity";
import { EntidadBase } from "src/utilidades/EntidadBase";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Empleado } from 'src/empleado/entities/empleado.entity';

@Entity()
export class DetalleFactura extends EntidadBase {

    @Column()
    subtotal: number;

    @Column()
    iva: number;

    @Column()
    total: number;

    @Column({ name: "clienteId" })
    clienteId: number;

    @Column({ name: "empleadoId" })
    empleadoId: number;

    @Column({ name: "tipoPagoId" })
    tipoPagoId: number;

    @OneToMany(() => TrabajoRealizado, (trabajosRealizados) => trabajosRealizados.detalleFactura)
    trabajosRealizados: TrabajoRealizado[];

    @ManyToOne(() => Cliente, (cliente) => cliente.detalleFactura)
    cliente: Cliente;

    @ManyToOne(() => TipoPago, (tipoPago) => tipoPago.detalleFactura)
    tipoPago: TipoPago;

    @ManyToOne(() => Empleado, (empleado) => empleado.detalleFactura)
    empleado: Empleado;
}
