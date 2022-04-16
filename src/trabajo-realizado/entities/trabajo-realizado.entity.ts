import { DetalleFactura } from './../../detalle-factura/entities/detalle-factura.entity';
import { TipoTrabajo } from "src/tipo-trabajo/entities/tipo-trabajo.entity";
import { EntidadBase } from "src/utilidades/EntidadBase";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class TrabajoRealizado extends EntidadBase {

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @ManyToOne(() => TipoTrabajo, (tipoTrabajo) => tipoTrabajo.trabajosRealizados)
    tipoTrabajo: TipoTrabajo;

    @ManyToOne(() => DetalleFactura, (detalleFactura)=> detalleFactura.trabajosRealizados)
    detalleFactura: DetalleFactura;
}
