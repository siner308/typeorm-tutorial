import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  LoadEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Brand } from '../entity/Brand';
import { TransactionCommitEvent } from 'typeorm/subscriber/event/TransactionCommitEvent';
import { TransactionRollbackEvent } from 'typeorm/subscriber/event/TransactionRollbackEvent';
import { TransactionStartEvent } from 'typeorm/subscriber/event/TransactionStartEvent';

@EventSubscriber()
export class BrandSubscriber implements EntitySubscriberInterface<Brand> {
  listenTo() {
    return Brand;
  }

  beforeInsert(event: InsertEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블에 입력 전 : ', event.entity);
  }

  afterInsert(event: InsertEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블에 입력 후 : ', event.entity);
  }

  beforeUpdate(event: UpdateEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블 데이터 수정 전 : ', event.entity);
  }

  afterUpdate(event: UpdateEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블 데이터 수정 후 : ', event.entity);
  }

  afterRemove(event: RemoveEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블 데이터 삭제 후 : ', event.entity);
  }

  beforeRemove(event: RemoveEvent<Brand>): Promise<any> | void {
    // console.log('Brand 테이블 데이터 삭제 전 : ', event.entity);
  }

  afterLoad(entity: Brand, event?: LoadEvent<Brand>): Promise<any> | void {
    // console.log('Brand 로드 후 : ', event.entity);
  }

  beforeTransactionCommit(event: TransactionCommitEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 커밋 전');
  }

  afterTransactionCommit(event: TransactionCommitEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 커밋 후');
  }

  beforeTransactionRollback(event: TransactionRollbackEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 롤백 전');
  }

  afterTransactionRollback(event: TransactionRollbackEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 롤백 후');
  }

  beforeTransactionStart(event: TransactionStartEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 시작 전');
  }

  afterTransactionStart(event: TransactionStartEvent): Promise<any> | void {
    // console.log('Brand 트랜잭션 시작 후');
  }
}
