const UserController = require('./../Controllers/User');
const {celebrate} = require('celebrate');
const {signin, signup} = require('./celebrates');
module.exports = (router) => {
    router.route('/user/signin').post(celebrate(signin),UserController.signin);
    router.route('/user/signup').post(celebrate(signup), UserController.signup);
}