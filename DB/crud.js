const mongoose = require('mongoose');
const db = require('./index.js')
const Image = require('./image.js');

var createImage = (image, callback) => {
  Image.create(image, function (err, image) {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, image);
    }
  });
}

var getImages = (product, callback) => {
  Image.find({ product: product }, function(err, result) {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

var updateImage = (image, callback) => {
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

var deleteImage = (image, callback) => {
  Image.deleteOne({ product: image.product, url: image.url}, (err, result) => {
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