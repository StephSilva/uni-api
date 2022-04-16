import { TrabajoRealizado } from "src/trabajo-realizado/entities/trabajo-realizado.entity";
import { EntidadBase } from "src/utilidades/EntidadBase";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class TipoTrabajo extends EntidadBase {
    @Column()
    nombre: string;

    @OneToMany(() => TrabajoRealizado, (factura) => factura.tipoTrabajo)
    trabajosRealizados: TrabajoRealizado[];
}
