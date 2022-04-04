import { Client } from 'src/client/entities/client.entity';
import { JournalVoucher } from 'src/journal-voucher/entities/journal-voucher.entity';
import { Sale } from 'src/sales/entities/sale.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  ruc: string;

  @OneToMany(() => Client, (client) => client.company)
  clients: Client[];

  @OneToMany(() => JournalVoucher, (voucher) => voucher.company)
  journalVouchers: JournalVoucher[];

  @OneToMany(() => Sale, (sale) => sale.company)
  sales: Sale[];
}
