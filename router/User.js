const { Router } = require('express'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secretKey = 'mysecretkey';

const router = Router();

// Import controllers

const { registerUser } = require('../controller/User')

// Routes

router.post('/signup', (req,res)=> {
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  registerUser(req.body, (err, result) => {
    if(err){
      res.statusCode = 400;
      res.json(err);
    } else {
      res.statusCode = 200;
      res.json(result);
    }
  });
});

module.exports = router;