const { Sequelize, DataTypes } = require('sequelize');
const dataGenerator = require('./dataGenerator.js');
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PW, {
  dialect: 'postgres',
  storage: host: process.env.POSTGRES_HOST + ':' + process.env.POSTGRES_PORT,
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


const Product = sequelize.define('Product', {
  product : {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true
  },
  productName : {
    type: DataTypes.STRING
  }
});

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

Product.hasMany(Image);
Image.belongsTo(Product);


const ENTRIES = 10000000;
const STEP_COUNT = 100;

//sequelize.sync({force: true})
sequelize.sync()
.then(async (result) => {
  console.log('Done syncing, generating data...')
  var step = ENTRIES / STEP_COUNT
  for (var i = 0; i < STEP_COUNT; i++) {
    var products = [];
    console.log('Starting step', i);
    for (var j = (i * step) + 1; j <= (i + 1) * step; j++) {

      products.push({product: j, productName: ''});
    }
    console.log('creating products...')
    await Product.bulkCreate(products)
    .then(async (result)  => {
      console.log('Generating image objects...')
      var images = dataGenerator(i * step, (i + 1) * step);
      console.log('creating images...')
      await Image.bulkCreate(images);
    })
  }
  await sequelize.close();
  console.log('finished');
});
