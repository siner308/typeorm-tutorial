import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Position } from './Position';
import { Hashtag } from './Hashtag';
import { Brand } from './Brand';

interface RestaurantProps {
  position?: Position;
  brand?: Brand;
  name: string;
}

@Entity('restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column(() => Position)
  position: Position;

  @ManyToOne(() => Brand, (brand: Brand) => brand.restaurants)
  brand: Brand;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @ManyToMany(() => Hashtag, (hashtag: Hashtag) => hashtag.restaurants, { eager: true })
  hashtags: Hashtag[];

  constructor(props?: RestaurantProps) {
    this.brand = props?.brand;
    this.position = props?.position;
    this.name = props?.name;
  }
}
