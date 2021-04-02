const ToDoController = require('../Controllers/ToDo');
module.exports = (router) => {
    router.route('/list/items').get(ToDoController.getList);
    router.route('/list/item/create').post(ToDoController.createItem);
    router.route('/list/item/update').put(ToDoController.updateItem);
    router.route('/list/item/delete').delete(ToDoController.deleteItem);
}