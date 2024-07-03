const express = require("express");
const router = express.Router();
const myAuthMiddle = require("../Middleware/authMiddleware")


const { handleSignUp ,handleGetAllUsers } = require("../Controllers/auth");



// Routers : they will go in the router file
//Roue for sign up
router.post("/users/signUp", handleSignUp);

//Read all request from mongodb  
router.get("/users/",myAuthMiddle ,handleGetAllUsers);

module.exports = router;
