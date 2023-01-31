import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  isAdm: boolean;

  @Column({ default: new Date().toDateString() })
  createdOn: Date;

  @Column({ default: new Date().toDateString() })
  updatedOn: Date;
}