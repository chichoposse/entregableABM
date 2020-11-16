const fs = require('fs'); 

const indexController = {
    index: function(req, res, next) {
        var products = JSON.parse(fs.readFileSync(__dirname + "/../database/products.json"));
        res.render('index', {products});
      }
}

module.exports = indexController;