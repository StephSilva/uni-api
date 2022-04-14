import { Empresa } from 'src/empresas/entities/empresa.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Cliente extends BaseEntity {
  @Column()
  nombre: string;

  @Column({ name: 'empresaId' })
  empresaId: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.clientes)
  empresa: Empresa;
}
