import { Empresa } from 'src/empresas/entities/empresa.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ComprobanteDiario extends BaseEntity {
  @Column()
  numeroCuenta: string;

  @Column()
  descripcion: string;

  @Column()
  parcial: number;

  @Column()
  debito: number;

  @Column()
  haber: number;

  @Column({ name: 'empresaId' })
  empresaId: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.comprobantesDiario)
  empresa: Empresa;
}
