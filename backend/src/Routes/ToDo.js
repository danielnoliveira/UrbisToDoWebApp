const ToDoController = require('../Controllers/ToDo');
const {celebrate} = require('celebrate');
const {createItem,updateItem,deleteItem} = require('./celebrates');
const jwt = require('jsonwebtoken');

function jwtAuthetication(req,res,next){
    const token = req.headers['x-jw-token'];
    
    if(!token) return res.status(401).json({auth: false, msg: "Cadê o token???"});
    

    jwt.verify(token, process.env.SECRET, (err,decoded)=>{
        if(err) return res.status(500).json({auth: false, msg: "Token expirou!!!"});

        req.userId = decoded.id;
        next();
    });

}

module.exports = (router) => {
    router.route('/list/items').get(jwtAuthetication,ToDoController.getList);
    router.route('/list/item/create').post(jwtAuthetication,celebrate(createItem),ToDoController.createItem);
    router.route('/list/item/update').put(jwtAuthetication,celebrate(updateItem),ToDoController.updateItem);
    router.route('/list/item/delete').delete(jwtAuthetication,celebrate(deleteItem),ToDoController.deleteItem);
}