// console.log("I am server .js file");

const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contact_route"));
app.use("/api/users",require("./routes/userRoutes"));


app.listen(port, () =>{ 
    console.log(`Example app listening on port ${port}!`);
});