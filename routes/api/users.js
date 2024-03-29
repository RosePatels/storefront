const { Router } = require('express');
const router = Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if(!users) throw new Error('No users found');
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            return res.status(400).json({ email: "A user is already registered with that email" });
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if(!user) {
                return res.status(404).json({ email: "This user does not exist" });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                        }
                        
                        jwt.sign(
                            payload, 
                            keys.secretOrKey,
                            { 
                                expiresIn: 3600
                            },
                            (error, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({ password: "Incorrect password" });
                    }
                })
        })
})

module.exports = router;