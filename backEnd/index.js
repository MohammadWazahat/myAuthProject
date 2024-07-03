const express = require("express");
const app = express();
const { connectMongoDb} = require ("./Connection/connection");
const routes = require("./Routers/user");
const authRoutes = require("./Routers/auth");
const path = require ("path");
const cors = require ("cors");
require('dotenv').config();
const cookieParser = require('cookie-parser')

//Variable
const port = 8005;

//Connection 
connectMongoDb("mongodb://127.0.0.1:27017/MyAuthDb");


//Middleware
app.use(cors())
// Middleware for Ejs
app.set("view engine","ejs");
app.set("views", path.resolve("./Views"));

//Middleware for rendering form data
app.use(express.json());
app.use(express.urlencoded({extended : false }));
app.use(cookieParser());

//Auth Routes Middleware
app.use(authRoutes);

//Middleware to render all the routes
app.use(routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


