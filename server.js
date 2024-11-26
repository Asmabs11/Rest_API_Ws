const express = require ("express")
const app = express ()
require("dotenv").config();
const connectDb = require ("./Config/ConnectDb");
app.use(express.json())
const UserRouter = require("./Routes/User1");
app.use("/User" , UserRouter);


app.listen(5000 , (err=>err? console.log(err):console.log("server is runnig on port 5000")));

connectDb()