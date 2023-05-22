const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport =>  {
    passport.use(new Strategy(options, (jwt_payload, done) => {
        console.log(jwt_payload);
        done();
    }))
}