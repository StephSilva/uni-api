import { Injectable } from '@nestjs/common';
import { CreateJournalVoucherDto } from './dto/create-journal-voucher.dto';
import { UpdateJournalVoucherDto } from './dto/update-journal-voucher.dto';

@Injectable()
export class JournalVoucherService {
  create(createJournalVoucherDto: CreateJournalVoucherDto) {
    return 'This action adds a new journalVoucher';
  }

  findAll() {
    return `This action returns all journalVoucher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} journalVoucher`;
  }

  update(id: number, updateJournalVoucherDto: UpdateJournalVoucherDto) {
    return `This action updates a #${id} journalVoucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} journalVoucher`;
  }
}
