import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
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

  @ManyToOne(() => BuyCar, (shoppingOneCar) =>shoppingOneCar.productsList)
  shoppingCar: BuyCar;

}