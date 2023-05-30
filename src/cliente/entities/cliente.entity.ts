import { EntidadBase } from "../../utilidades/EntidadBase";
import { Column, Entity, OneToMany } from "typeorm";
import { DetalleFactura } from "../../detalle-factura/entities/detalle-factura.entity";

@Entity()
export class Cliente extends EntidadBase {

    @Column()
    nombre: string;

    @Column()
    ruc: string;

    @Column({ nullable: true })
    telefono: string;

    @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.cliente)
    detalleFactura: DetalleFactura[];
}
