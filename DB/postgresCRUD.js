const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
});



const getImages = (image, callback) => {
  var query = `SELECT product_id, imagename, color, url, alt FROM images WHERE product_id = ${image}`;
  (async () => {
    const {rows} = await pool.query(query);
    var images = [];
    for (image of rows) {
      images.push({
        product: image.product_id,
        imageName: image.imagename,
        color: image.color,
        url: image.url,
        alt: image.alt
      });
    }
    callback(null, images);
  })().catch(err => {
    console.error(err);
    callback(err, null);
  });
}

const createImage = (image, callback) => {
  var query = `INSERT INTO images(product_id, imagename, color, url, alt) VALUES (${image.product_id}, '${image.imageName}', '${image.color}', '${image.url}', '${image.alt}')`;
  (async () => {
    var result = await pool.query(query);
    callback(null, result)
  })().catch(err => {
    console.error(err);
    callback(err, null);
  });
}

const updateImage = (image, callback) => {

}

const deleteImage = (image, callback) => {

}

const deleteProduct = (product, callback) => {

}

module.exports.getImages = getImages;
module.exports.createImage = createImage;
module.exports.updateImage = updateImage;
module.exports.deleteImage = deleteImage;
module.exports.deleteProduct = deleteProduct


// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('test', 'postgres', 'hrr48', {
//   dialect: 'postgres',
//   storage: 'localhost:5432',
//   logging: false
// })


// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }


// const Product = sequelize.define('Product', {
//   product : {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     unique: true
//   },
//   productName : {
//     type: DataTypes.STRING
//   }
// });

// const Image = sequelize.define('Image', {
//   product_id : {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   imageName: {
//     type: DataTypes.STRING
//   },
//   color: {
//     type: DataTypes.STRING
//   },
//   url: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   alt: {
//     type: DataTypes.STRING
//   }
// });

// Product.hasMany(Image);
// Image.belongsTo(Product);


// const createProduct = async (productNumber, productName) => {
//   try {
//     await Product.create({
//       product: productNumber,
//       productName: productName
//     })
//   } catch (err) {
//     console.error(err);
//   }
// }

// const createImage = async (image) => {
//   try {
//     await Image.create({
//      procut_id: image.product,
//       imageName: image.imageName,
//       color: image.color,
//       url: image.url,
//       alt: image.alt
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// module.exports.connection = sequelize;
// module.exports.Image = Image;
// module.exports.Product = Product;
// module.exports.createProduct = createProduct;
// module.exports.createImage = createImage;