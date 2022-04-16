import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class EntidadBase {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    fechaCreacion: Date;

    @DeleteDateColumn()
    fechaBorrado: Date;
}