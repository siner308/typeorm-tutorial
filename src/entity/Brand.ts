import {
  BaseEntity,
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { Hashtag } from './Hashtag';
import { Restaurant } from './Restaurant';
import { BrandOwner } from './BrandOwner';

interface BrandProps {
  name: string
  owner?: BrandOwner;
  hashtags: Hashtag[];
}

@Entity('brand')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 150 })
  name: string;

  @Column(() => BrandOwner, { prefix: false })
  owner: BrandOwner;

  @ManyToMany(() => Hashtag, (hashtag: Hashtag) => hashtag.brands)
  @JoinTable()
  hashtags: Hashtag[];

  @OneToMany(() => Restaurant, (restaurant: Restaurant) => restaurant.brand)
  restaurants: Restaurant[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
