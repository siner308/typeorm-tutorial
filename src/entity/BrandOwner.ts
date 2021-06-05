import { Column } from 'typeorm';
import { Brand } from './Brand';

interface BrandOwnerProps {
  name?: string;
  telephone?: string;
  address?: string;
}

export class BrandOwner {
  @Column({ type: 'varchar', name: 'owner_name', length: 100 })
  name: string;

  @Column({ type: 'varchar', name: 'owner_telephone', length: 20 })
  telephone: string;

  @Column({ type: 'varchar', name: 'owner_address', length: 300 })
  address: string;

  static create(props: BrandOwnerProps) {
    return new BrandOwner(props);
  }

  constructor(props: BrandOwnerProps) {
    this.name = props?.name;
    this.telephone = props?.telephone;
    this.address = props?.address;
  }
}
