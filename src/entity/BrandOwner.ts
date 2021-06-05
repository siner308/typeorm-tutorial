import { Column } from 'typeorm';

interface BrandOwnerProps {
  name?: string;
  telephone?: string;
  address?: string;
}

export class BrandOwner {
  @Column({ type: 'varchar', name: 'owner_name', length: 100 })
  name: string;

  @Column({ type: 'int', name: 'owner_telephone' })
  telephone: string;

  @Column({ type: 'varchar', name: 'owner_address', length: 300 })
  address: string;

  constructor(props: BrandOwnerProps) {
    Object.assign(this, props);
  }
}
