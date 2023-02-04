import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {BuyCar} from "./BuyCar"

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false})
  quant: number;

  @Column({ nullable: false })
  outfitter: number;

  @ManyToOne(() => BuyCar)
  @JoinColumn({
    name: 'id_shopp_car_owner',
    referencedColumnName: 'id',
  })
  shopp_car_owner: BuyCar;

}