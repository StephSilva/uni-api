import { BaseEntity } from 'src/utils/base.entity';
import { Entity, Column, BeforeInsert } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  encodePassword() {

  }

  @Column({ default: true })
  isActive: boolean;
}