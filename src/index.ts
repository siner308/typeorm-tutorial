import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { Restaurant } from './entity/Restaurant';
import { Position } from './entity/Position';
import { Brand } from './entity/Brand';
import { BrandOwner } from './entity/BrandOwner';
import { Hashtag } from './entity/Hashtag';

async function run() {
  console.log('Inserting a new restaurant into the database...');
  const brandHashtags: Hashtag[] = Hashtag.create([ { name: '떡볶이' }, { name: '순대' } ]);
  const locationHashtag: Hashtag = Hashtag.create({ name: '서울' });

  const brandOwner = BrandOwner.create({
    name: '안정현',
    telephone: '010-1234-1234',
    address: '아무시 아무구 아무동 아무아파트 아무동 아무호',
  });
  const brand = Brand.create({ owner: brandOwner, name: '사이너떡볶이', hashtags: brandHashtags });

  const restaurantPosition = Position.create({ longitude: 127.39, latitude: 37.324 });
  const restaurant = Restaurant.create({
    position: restaurantPosition,
    brand: brand,
    name: '사이너떡볶이 서울본점',
    hashtags: [ ...brandHashtags, locationHashtag ],
  });

  await restaurant.save();
  console.log('Saved a new place with id: ' + restaurant.id);

  console.log('Loading restaurants from the database...');
  const restaurants = await Restaurant.find();
  console.log('Loaded restaurants: ', restaurants);

  console.log('Here you can setup and run express/koa/any other framework.');
}

(async () => {
  const connection = await createConnection();
  await run();
})();
