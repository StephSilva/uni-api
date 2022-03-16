import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findByEmail = async (email: string) => {
    try {
      const data = await this.repository.findOneOrFail({
        where: {
          email,
        },
      });
      return { data };
    } catch (error) {
      return { error: true };
    }
  };
}
