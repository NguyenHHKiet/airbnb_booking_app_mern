const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./model/User');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'qazxsw2134rfdecvnbhgyt5678yuhjnmkoli89p';

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5173',
}));

const uri = process.env.MONGO_URL;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/test', (req, res) => {
  res.json('test oke');
});

app.post('/register', async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(422).json();
  }

});

app.post('/login', async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const userDoc = await User.findOne({
    email
  });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({
        email: userDoc.email,
        id: userDoc._id
      }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status.json('pass failed');
    }
  } else {
    res.json("not found");
  }
})

app.get('/profile', (req, res) => {
  const {
    token
  } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async(err, userData) => {
      if (err) throw err;
      const {name ,email ,_id} = await User.findById(userData.id);
      res.json({name ,email ,_id});
    })
  } else {
    res.json(null);
  }
})

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});

// FvCL2xpzSiB7ls0P
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});