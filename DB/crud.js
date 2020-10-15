const mongoose = require('mongoose');
const db = require('./index.js')
const Image = require('./image.js');

const createImage = (image, callback) => {
  Image.create(image, function (err, image) {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, image);
    }
  });
}

const getImages = (product, callback) => {
  Image.find({ product: product }, function(err, result) {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

const updateImage = (image, callback) => {
  Image.find({ product: image.product,  url: image.url}, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      result = result[0];
      if (image.color) {
        result.color = image.color;
      }
      if (image.imageName) {
        result.imageName = image.imageName
      }
      if (image.alt) {
        result.alt = image.alt;
      }
      result.save((err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  });
}

const deleteImage = (image, callback) => {
  Image.deleteOne({ product: image.product, url: image.url}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, err);
    }
  });
}

const deleteProduct = (product, callback) => {
  Image.deleteMany({ product: product}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, err);
    }
  });
}

module.exports.createImage = createImage;
module.exports.getImages = getImages;
module.exports.updateImage = updateImage;
module.exports.deleteImage = deleteImage;
module.exports.deleteProduct = deleteProduct;