import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ShoppingCart extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public productId: number;

  @Column()
  public userId: number;

  @Column()
  public price: number;

  @CreateDateColumn()
  @Exclude()
  public createdAt: Date;
}
