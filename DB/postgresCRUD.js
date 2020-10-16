const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('carousel', 'postgres', 'hrr48', {
  dialect: 'postgres',
  storage: 'localhost:5432'
})


const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


const Product = sequelize.define('Product', {
  productNumber : {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true
  },
  productName : {
    type: DataTypes.STRING
  }
});

const Image = sequelize.define('Image', {
  productNumber : {
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

Product.hasMany(Image, {
  foreignKey: 'productNumber'
});
Image.belongsTo(Product);


const createProduct = async (productNumber, productName) => {
  try {
    await Product.create({
      productNumber: productNumber,
      productName: productName
    })
  } catch (err) {
    console.error(err);
  }
}

const createImage = async (image) => {
  try {
    await Image.create({
      productNumber: image.product,
      imageName: image.imageName,
      color: image.color,
      url: image.url,
      alt: image.alt
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports.Image = Image;
module.exports.Product = Product;
module.exports.createProduct = createProduct;
module.exports.createImage = createImage;