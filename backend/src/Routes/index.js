const ToDo = require('./ToDo');
const User = require('./User');
module.exports = (router) => {
    ToDo(router);
    User(router);
    return router;
}