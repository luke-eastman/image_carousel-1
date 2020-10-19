const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'hrr48', {
  dialect: 'postgres',
  storage: 'localhost:5432',
  logging: false
})


const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


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

const Image = sequelize.define('Image', {
  product_id : {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  imageName: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alt: {
    type: DataTypes.STRING
  }
});

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

const createImage = async (image) => {
  try {
    await Image.create({
     procut_id: image.product,
      imageName: image.imageName,
      color: image.color,
      url: image.url,
      alt: image.alt
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports.connection = sequelize;
module.exports.Image = Image;
//module.exports.Product = Product;
//module.exports.createProduct = createProduct;
module.exports.createImage = createImage;