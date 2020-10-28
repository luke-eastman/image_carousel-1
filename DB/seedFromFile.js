const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
});

(async () => {
  var dropTableIfExists = `DROP TABLE IF EXISTS images`
  var createTableQuery = `CREATE TABLE images (id SERIAL, product_id int, imagename text, color text, url text, alt text, PRIMARY KEY(id))
  `;
  var indexTableQuery = `create index image_product_id on images(product_id)`;
  var copyFileQuery = `COPY images(product_id, imagename, color, url, alt) FROM '${process.env.SEED_FILE}' WITH DELIMITER '|'`;
  try {
    console.log('starting');
    await pool.query(dropTableIfExists);
    console.log('images dropped if it existed')
    await pool.query(createTableQuery);
    console.log('table created')
    await pool.query(indexTableQuery);
    console.log('table indexed');
    await pool.query(copyFileQuery);
    console.log('file copied');
    await pool.end();
    console.log('finished')
  } catch(err) {
    console.log(err);
  }
})();