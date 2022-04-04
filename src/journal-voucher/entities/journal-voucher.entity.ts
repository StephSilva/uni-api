import { Company } from 'src/company/entities/company.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class JournalVoucher extends BaseEntity {
  @Column()
  appointmentNumber: string;

  @Column()
  description: string;

  @Column()
  partial: number;

  @Column()
  debit: number;

  @Column()
  toHave: number;

  @ManyToOne(() => Company, (company) => company.clients)
  company: Company;
}
