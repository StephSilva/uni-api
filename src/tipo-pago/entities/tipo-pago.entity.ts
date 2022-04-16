import { DetalleFactura } from "src/detalle-factura/entities/detalle-factura.entity";
import { EntidadBase } from "src/utilidades/EntidadBase";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class TipoPago extends EntidadBase {
    @Column()
    nombre: string;

    @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.tipoPago)
    detalleFactura: DetalleFactura[];
}
