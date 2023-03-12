
const express = require("express");
const router= express.Router();
const {
    registerUser,
    loginUser,
    currentUser
}=require("../controllers/userController");

const validateToken = require("../middleware/ValidateTokenHandler");

router.post("/login",loginUser).get("/current",validateToken,currentUser).post("/register",registerUser);





module.exports = router;