import { Usuario } from './../../usuario/entities/usuario.entity';
import { EntidadBase } from "../../utilidades/EntidadBase";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Rol extends EntidadBase {

    @Column()
    nombre: string;

    @OneToMany(() => Usuario, (usuario) => usuario.rol)
    usuarios: Usuario[]

}
