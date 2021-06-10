import { Column } from 'typeorm';
import { BaseEmbeddedEntity } from './base/BaseEmbeddedEntity';

interface BrandOwnerProps {
  name?: string;
  telephone?: string;
  address?: string;
}

export class BrandOwner extends BaseEmbeddedEntity<BrandOwnerProps> {
  @Column({ type: 'varchar', name: 'owner_name', length: 100 })
  name: string;

  @Column({ type: 'varchar', name: 'owner_telephone', length: 20 })
  telephone: string;

  @Column({ type: 'varchar', name: 'owner_address', length: 300 })
  address: string;
}
