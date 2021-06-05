import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Restaurant } from './entity/Restaurant';
import { Position } from './entity/Position';
import { Brand } from './entity/Brand';
import { BrandOwner } from './entity/BrandOwner';

createConnection().then(async connection => {

  console.log('Inserting a new user into the database...');
  const owner = new BrandOwner({ name: '안정현', telephone: '010-1234-1234', address: '아무시 아무구 아무동 아무아파트 아무동 아무호' });
  const brand = new Brand({ owner, name: '사이너떡볶이' });

  const restaurantPosition = new Position({ longitude: 127.39, latitude: 37.324 });
  const restaurant = new Restaurant({ position: restaurantPosition, brand: brand, name: '사이너떡볶이 서울본점' });
  await connection.manager.save(restaurant);
  console.log('Saved a new place with id: ' + restaurant.id);

  console.log('Loading users from the database...');
  const restaurants = await connection.manager.find(Restaurant);
  console.log('Loaded users: ', restaurants);

  console.log('Here you can setup and run express/koa/any other framework.');

}).catch(error => console.log(error));
