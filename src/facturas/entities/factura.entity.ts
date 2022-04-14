import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/utils/base.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';

@Entity()
export class Factura extends BaseEntity {
  @Column()
  fecha: Date;

  @Column()
  numeroFactura: string;

  @Column()
  descripcion: string;

  @Column()
  ventasExoneradas: number;

  @Column()
  ventasExentas: number;

  @Column()
  ventasGrabadas: number;

  @Column({ name: 'empresaId' })
  empresaId: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.facturas)
  empresa: Empresa;
}
