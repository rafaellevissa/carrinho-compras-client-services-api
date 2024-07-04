import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import type { Metadata } from './dto/shopping-cart-metadata.dto';

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

  @Column('simple-json')
  public metadata: Metadata | string;

  @CreateDateColumn()
  @Exclude()
  public createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  updateMetadata() {
    if (typeof this.metadata !== 'string') {
      this.metadata = JSON.stringify(this.metadata);
    }
  }
}
