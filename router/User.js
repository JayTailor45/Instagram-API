const { Router } = require('express'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secretKey = 'mysecretkey';

const router = Router();

// Import controllers

const { registerUser, signinUser } = require('../controller/User')

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

router.post('/signin', (req, res) => {
  signinUser(req.body, (err, result) => {
    if (err) {
      res.status(400).send({ message: 'Email ID does not exist', result: false });
    } else {
      const hash = bcrypt.compareSync(req.body.password, result.password);
      if (hash) {
        const token = jwt.sign({ email: req.body.email }, secretKey, {});
        res.status(200).send({
          message: 'Login successfully',
          result: true,
          token: token,
          role: result.role,
          id: result.id,
          fullName: result.fullName
        })
      } else {
        res.status(400).send({ message: 'Password incorrect', result: false });
      }
    }
  });
});

module.exports = router;