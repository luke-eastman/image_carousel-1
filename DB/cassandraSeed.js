const cassandra = require('cassandra-driver');
const lineReader = require('line-reader');
const lineByLine = require('n-readlines');
const liner = new lineByLine('./imageCarouselDataTest');


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
//.then(client.execute(query)
.then(async result => {
  var count = 0;
  var batch = 0;
  let line;

  while (line = liner.next()) {
    line = line.toString();
    var image = JSON.parse(line);

    if(count % 100000 === 0) {
      console.log(`starting batch ${batch++}...`)
    }
    var insertQuery = `INSERT INTO images (id, product_id, image_name, color, url, alt) VALUES (${count}, ${image.product_id}, '${image.image_name}', '${image.color}', '${image.url}', '${image.alt}')`;

    await client.execute(insertQuery)
    .catch( err => {
      console.log(err)
    })
    count++;


  }
  client.shutdown();
});

CREATE TABLE images (product_id bigint PRIMARY KEY, image_name text, color text, url text, alt text);