import { Company } from 'src/company/entities/company.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Sale extends BaseEntity {
  @Column()
  date: Date;

  @Column()
  invoice: string;

  @Column()
  description: string;

  @Column()
  exonSales: number;

  @Column()
  exentSales: number;

  @Column()
  recordSales: number;

  @Column()
  totalAmount: number;

  @Column()
  iva: number;

  @Column()
  sales: number;

  @ManyToOne(() => Company, (company) => company.sales)
  company: Company;
}
