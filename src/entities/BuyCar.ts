import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from "typeorm"
import { Product } from "./Products";
import { User } from "./User"

@Entity()
export class BuyCar {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  price: string;

  @Column({nullable: false})
  quant: number;

  @Column({ default: new Date().toDateString() })
  createdOn: Date;

  @ManyToOne(() => User, (user) => user.shoppingCars)
  user: User;

  @OneToMany(() => Product, (productItem) => productItem.shoppingCar)
  productsList: Product[];

}