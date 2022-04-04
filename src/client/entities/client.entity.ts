import { Company } from "src/company/entities/company.entity";
import { BaseEntity } from "src/utils/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Client extends BaseEntity {

    @Column()
    name: string;

    @ManyToOne(() => Company, (company) => company.clients)
    company: Company

}
