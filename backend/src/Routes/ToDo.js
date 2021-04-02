const ToDoController = require('../Controllers/ToDo');
const {celebrate} = require('celebrate');
const {createItem,updateItem} = require('./celebrates');

module.exports = (router) => {
    router.route('/list/items').get(ToDoController.getList);
    router.route('/list/item/create').post(celebrate(createItem),ToDoController.createItem);
    router.route('/list/item/update').put(celebrate(updateItem),ToDoController.updateItem);
    router.route('/list/item/delete').delete(ToDoController.deleteItem);
}