const UserController = require('./../Controllers/User');
const {celebrate} = require('celebrate');
const validaters = require('./celebrates');
module.exports = (router) => {
    router.route('/user/login').post(celebrate(validaters.login),UserController.login);
}