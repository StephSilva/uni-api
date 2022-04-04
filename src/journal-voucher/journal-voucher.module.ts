import { Module } from '@nestjs/common';
import { JournalVoucherService } from './journal-voucher.service';
import { JournalVoucherController } from './journal-voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalVoucher } from './entities/journal-voucher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JournalVoucher])],
  controllers: [JournalVoucherController],
  providers: [JournalVoucherService]
})
export class JournalVoucherModule {}
