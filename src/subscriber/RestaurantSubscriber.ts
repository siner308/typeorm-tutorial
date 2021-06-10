import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  LoadEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Restaurant } from '../entity/Restaurant';
import { TransactionCommitEvent } from 'typeorm/subscriber/event/TransactionCommitEvent';
import { TransactionRollbackEvent } from 'typeorm/subscriber/event/TransactionRollbackEvent';
import { TransactionStartEvent } from 'typeorm/subscriber/event/TransactionStartEvent';

@EventSubscriber()
export class RestaurantSubscriber implements EntitySubscriberInterface<Restaurant> {
  listenTo() {
    return Restaurant;
  }

  beforeInsert(event: InsertEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블에 입력 전 : ', event.entity);
  }

  afterInsert(event: InsertEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블에 입력 후 : ', event.entity);
  }

  beforeUpdate(event: UpdateEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블 데이터 수정 전 : ', event.entity);
  }

  afterUpdate(event: UpdateEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블 데이터 수정 후 : ', event.entity);
  }

  afterRemove(event: RemoveEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블 데이터 삭제 후 : ', event.entity);
  }

  beforeRemove(event: RemoveEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 테이블 데이터 삭제 전 : ', event.entity);
  }

  afterLoad(entity: Restaurant, event?: LoadEvent<Restaurant>): Promise<any> | void {
    console.log('Restaurant 로드 후 : ', event.entity);
  }

  beforeTransactionCommit(event: TransactionCommitEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 커밋 전');
  }

  afterTransactionCommit(event: TransactionCommitEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 커밋 후');
  }

  beforeTransactionRollback(event: TransactionRollbackEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 롤백 전');
  }

  afterTransactionRollback(event: TransactionRollbackEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 롤백 후');
  }

  beforeTransactionStart(event: TransactionStartEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 시작 전');
  }

  afterTransactionStart(event: TransactionStartEvent): Promise<any> | void {
    console.log('Restaurant 트랜잭션 시작 후');
  }
}
