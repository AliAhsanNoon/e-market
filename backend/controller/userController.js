const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

router.post('/register', function (req, res) {
    var user = new User({
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserPassword: User.hashPassword(req.body.UserPassword)
    });
    console.log('into userRegister', user)

    let promise = user.save();
    promise.then(function (doc) {
        return res.status(201).json(doc)
    });

    promise.catch(function (err) {
        return res.status(501).json(err)
    });
});


router.post('/login', function (req, res) {
    let promise = User.findOne({ UserEmail: req.body.UserEmail }).exec();

    promise.then(function (doc) {
        if (doc.isValid(req.body.UserPassword)) {
            let token = jwt.sign({ UserName: doc.UserName, UserEmail: doc.UserEmail }, 'secret', { expiresIn: '3h' });
            res.status(200).json(token);
        } else {
            return res.status(501).json('Invalid Credientials')
        }
    });
    promise.catch(function (err) {
        return res.status(501).json('Invalid Credientials')
    })
})

module.exports = router;