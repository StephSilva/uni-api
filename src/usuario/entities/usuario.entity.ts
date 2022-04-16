import { Rol } from "src/rol/entities/rol.entity";
import { EntidadBase } from "src/utilidades/EntidadBase";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Usuario extends EntidadBase {

    @Column()
    nombre: string;

    @Column()
    nombreUsuario: string;

    @Column()
    contrasenia: string;

    @Column({ name: "rolId" })
    rolId: number;

    @ManyToOne(() => Rol, (rol)=> rol.usuarios)
    rol: Rol
}
