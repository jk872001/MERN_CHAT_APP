require("dotenv").config();
const express = require("express");
var cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors()) // Use this after the variable declaration
const chats = require("./data/data");

app.get("/api/chats", (req, res) => {
  res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleUser = chats.find((e) => e._id === req.params.id);
  // console.log(singleUser)
  res.send(singleUser);
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
