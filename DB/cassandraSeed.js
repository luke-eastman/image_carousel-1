const cassandra = require('cassandra-driver');
const lineReader = require('line-reader');


const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1'
});

client.connect();

const query = 'CREATE TABLE images (id bigint PRIMARY KEY, '
  + 'product_id bigint, '
  + 'image_name text, '
  + 'color text, '
  + 'url text, '
  + 'alt text); ';

client.execute('USE carousel')
.then(client.execute('DROP TABLE images')
.then(client.execute(query)
.then(result => {

})));