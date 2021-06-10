import { Column } from 'typeorm';
import { BaseEmbeddedEntity } from './base/BaseEmbeddedEntity';

interface PositionProps {
  latitude: number;
  longitude: number;
}

export class Position extends BaseEmbeddedEntity<PositionProps> {
  @Column({ type: 'double', name: 'position_latitude' })
  latitude: number;

  @Column({ type: 'double', name: 'position_longitude' })
  longitude: number;
}
