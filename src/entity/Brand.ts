import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Hashtag } from './Hashtag';
import { Restaurant } from './Restaurant';
import { BrandOwner } from './BrandOwner';

interface BrandProps {
  name: string
  owner?: BrandOwner;
}

@Entity('brand')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 150 })
  name: string;

  @Column(() => BrandOwner, { prefix: false })
  owner: BrandOwner;

  @ManyToMany(() => Hashtag, (hashtag: Hashtag) => hashtag.brands)
  hashtags: Hashtag[];

  @OneToMany(() => Restaurant, (restaurant: Restaurant) => restaurant.brand)
  restaurants: Restaurant[];

  constructor(props?: BrandProps) {
    this.name = props?.name;
    this.owner = props?.owner;
  }
}
