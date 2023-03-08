// console.log("I am server .js file");

const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contact_route"));



app.listen(port, () =>{ 
    console.log(`Example app listening on port ${port}!`);
});