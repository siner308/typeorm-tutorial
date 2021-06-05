import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Restaurant } from './Restaurant';
import { Brand } from './Brand';

interface HashtagProps {
  name: string
}

@Entity('hashtag')
export class Hashtag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @ManyToMany(() => Restaurant, (restaurant: Restaurant) => restaurant.hashtags)
  restaurants: Restaurant[];

  @ManyToMany(() => Brand, (brand: Brand) => brand.hashtags)
  brands: Brand[];
}
