const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + "/../database/products.json"));


const productsController = {
    renderCrear: function(req, res, next) {
        res.render("crear");
    },
    storeCrear: function(req, res, next) {
        products.push(req.body);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(__dirname + "/../database/products.json", productsJSON);
        res.redirect("/")
    },
    renderEditar: function(req, res, next) {
        var idProduct = req.params.id;
        var productFound;
        for(var i=0;i < products.length;i++){
            if(products[i].id == idProduct){
                productFound = products[i];
                break;
            }
        }
        if(productFound){
            res.render("editar",{productFound})
        }else{
            res.send("No se encontró el producto");
        }
    },
    saveEditar: function(req, res, next) {
        var idProduct = req.params.id;
        var editProducto2 = products.map(function(producto){
            if(producto.id == idProduct){
                let productoEditado = req.body;
                productoEditado.id = idProduct;
                return productoEditado;
            }
            return producto;
        });
        editProductsJSON = JSON.stringify(editProducto2);
        fs.writeFileSync(__dirname + "/../database/products.json",editProductsJSON);
        res.redirect("/")
    },
    destroy : function(req,res,next){
        var idProduct = req.params.id;
        var productsDestroy = products.filter(function(product){
            return product.id != idProduct;
        });
        productsDestroyJSON = JSON.stringify(productsDestroy);
        fs.writeFileSync(__dirname + "/../database/products.json",productsDestroyJSON);
        res.redirect("/")
    }
}

module.exports = productsController;