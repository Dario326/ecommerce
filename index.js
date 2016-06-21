const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const port = 8080;
const app = express();

const mainCtrl = require("./server/mainCtrl")

mongoose.connect("mongodb://localhost/ecommerce/products")




app.use( bodyParser.json() )

app.use( express.static( `${ __dirname }/public` ) );

mainCtrl(app);




app.listen(port, () => {
    console.log(`feds listening on ${ port }`)
})