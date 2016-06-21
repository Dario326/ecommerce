const products = require("./products");
//const db = mongo('ecommerce', ['products']);

module.exports = app => {
    app.get("/api/products",function(req, res, next){
       products.find({}, function(err, result){
           if(err) {
            return   res.status(500).json(err)
           }
          return res.send(result);
       })
    })
//    
    app.post("/api/products/", function(req, res, next){
      new products(req.body).save(function (err, newProduct){
          if(err){
              return res.status(500).json(err)
          }
          return res.status(200).json(newProduct);
      })
    })
    
    app.get('/api/products/:id', function(req, res){  
    products.findById(req.params.id, function(err, product){
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(product);
        }
    });
});
//    
////    
    app.put("/api/products/:id", function(req, res, next){
       products.findByIdAndUpdate(req.params.id, req.body.name, function(err, product){
           if(err){
               return res.status(500).json(err)
           }
           return res.status(200).json(product)
       })
    })
//    
//    
    app.delete("/api/products/:id", function(req, res, next){
        products.findByIdAndRemove(req.params.id, function(err, product){
            if(err){
                return res.status(500).json(err)
            }
            return res.status(200).json(product)
        })
    })
    
}


 