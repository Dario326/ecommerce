const mongo = require("mongojs");
const db = mongo('ecommerce', ['products']);

module.exports = app => {
    app.get("/api/products",function(req, res, next){
       db.products.find({}, function(err, result){
           res.send(result);
       })
    })
    
    app.post("/api/products/", function(req, res, next){
        db.products.save(req.body, function(error, result) {
    if (error) {
      res.status(500).json(error);
    }
    return res.json(result);
  });
    })
    
    app.get('/api/products/:id', function(req, res){
    var idObj = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.findOne(idObj, function(err, response){
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
});
    
//    
    app.put("/api/products/:id", function(req, res, next){
        if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    var query = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.update(query, req.body, function(error, response){
        if(error) {
            return res.status(500).json(error);
        } else {
            return res.json(response);
        }
    });
    })
    
    
    app.delete("/api/products/:id", function(req, res, next){
         if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    var query = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.remove(query, function(error, response){
        if(error) {
            return res.status(500).json(error);
        } else {
            return res.json(response);
        }
    });
    })
    
}


 