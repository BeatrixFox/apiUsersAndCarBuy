import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn
} from "typeorm"
import { Product } from "./Products";
import { User } from "./User"

@Entity()
export class BuyCar {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable : false})
  name: string;

  @Column({ nullable: false })
  price: string;

  @Column({nullable: false})
  quant: number;

  @Column({ default: new Date().toDateString() })
  createdOn: Date;

  @Column({ default: new Date().toDateString() })
  updatedOn: Date;

  @ManyToOne(() => User , (user) => user.owned_shoppCars)
  @JoinColumn({ name: 'id_user_owner'})
  user_owner: User;

  @OneToMany(() => Product, (productItem) => productItem.shopp_car_owner)
  productsList: Product[];

}