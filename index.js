const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyb26.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`running server at port ${port}`);
});
