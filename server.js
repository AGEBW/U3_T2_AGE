const express = require('express');
const mongoose = require('mongoose');
const wagner = require('wagner-core');
const bodyParser = require('body-parser');
//ponga disponible models
require('./models/models')(wagner);


//Importan producRouter
const productRouter = require('./routers/product.router')(wagner);
const userRouter = require('./routers/user.router')(wagner);

//confi servidor express
let app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//le pondra la ruta localhost:3002
app.use("/products",productRouter);
app.use("/users",userRouter);


module.exports = app;