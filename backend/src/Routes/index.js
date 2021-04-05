const Task = require('./Task');
const User = require('./User');
module.exports = (router) => {
    Task(router);
    User(router);
    return router;
}