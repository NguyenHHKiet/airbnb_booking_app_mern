const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./model/User');
const bcrypt = require('bcryptjs');

require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

mongoose.connect(
    "mongodb+srv://booking:FvCL2xpzSiB7ls0P@cluster0.n5g1lar.mongodb.net/?retryWrites=true&w=majority"
,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.get('/test', (req, res) => {
    res.json('test oke');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
    const userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// FvCL2xpzSiB7ls0P
app.listen(4000);