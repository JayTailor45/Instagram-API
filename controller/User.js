const User = require('../schema/User');

exports.registerUser = (body, done) => {
  User.findOne({ where: { email: body.email } })
    .then((result) => {
      if(result) {
        done({ message: 'Email ID already registered' })
      } else {
        User.create(body).then((newUser) => {
          if (newUser) {
            done(null, newUser);
          } else {
            done({ message: 'Error creating new user' })
          }
        }).catch(err => {
          done(err);
        });
      }
    }).catch(err => {
      done(err);
    });
}