const UserController = require('./../Controllers/User');

module.exports = (router) => {
    router.route('/user/login').post(UserController.login);
}