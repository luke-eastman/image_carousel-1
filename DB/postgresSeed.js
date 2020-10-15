const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('carousel', 'postgres', 'hrr48', {
  dialect: 'postgres',
  storage: 'localhost:5432'
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();

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

(async () => {
   await Product.sync({ alter: true });
  const newProduct = await Product.create({
    productNumber: 0,
    name: 'first product!'
  });
  console.log(newProduct.id);
})()
