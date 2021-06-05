import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { Position } from './Position';
import { Hashtag } from './Hashtag';
import { Brand } from './Brand';
import { JoinColumn } from 'typeorm';


@Entity('restaurant')
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Column(() => Position, { prefix: false })
  position: Position;

  @ManyToOne(() => Brand, (brand: Brand) => brand.restaurants, { eager: true, cascade: true })
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  brand: Brand;

  @Column({ name: 'brand_id' })
  brandId: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @ManyToMany(() => Hashtag, (hashtag: Hashtag) => hashtag.restaurants, { eager: true })
  hashtags: Hashtag[];

  async save(): Promise<this> {
    this.brand = await this.brand.save();
    return super.save();
  }
}
