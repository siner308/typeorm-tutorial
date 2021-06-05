import { Column } from 'typeorm';

interface PositionProps {
  latitude: number;
  longitude: number;
}

export class Position {
  @Column({ type: 'double', name: 'position_latitude' })
  latitude: number;

  @Column({ type: 'double', name: 'position_longitude' })
  longitude: number;

  constructor(props: PositionProps) {
    this.latitude = props.latitude;
    this.longitude = props.longitude;
  }
}
