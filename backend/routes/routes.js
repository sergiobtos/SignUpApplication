const express = require('express');
const router = express.Router();
const signUpSchema = require('../models/signupModel');

router.post('/signup', (request, response)=>{
    const signUpUser = new signUpSchema({
        fullName: request.body.fullName,
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password
    });
    signUpUser.save()
    .then(data =>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error);
    });
    response.send('send');
});

module.exports = router;