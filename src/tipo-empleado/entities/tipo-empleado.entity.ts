import { Empleado } from './../../empleado/entities/empleado.entity';
import { EntidadBase } from "../../utilidades/EntidadBase";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class TipoEmpleado extends EntidadBase {

    @Column()
    nombre: string;

    @OneToMany(() => Empleado, (empleado) => empleado.tipoEmpleado)
    empleados: Empleado[]
}
