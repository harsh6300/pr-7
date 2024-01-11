const express = require('express');
const { model } = require('mongoose');
const usercontrollers = require('../controllers/usercontrollers')
const routes = express.Router();
const passport = require('passport')

routes.get('/',usercontrollers.login)
routes.get('/signup',usercontrollers.signup)
routes.get('/index',passport.checkUser,usercontrollers.index)
routes.post('/register',usercontrollers.register)
routes.post('/loginpage',passport.authenticate('local',{failureRedirect : '/'}),usercontrollers.loginpage)

module.exports = routes