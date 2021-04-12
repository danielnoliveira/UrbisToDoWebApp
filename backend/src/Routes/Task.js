const TaskController = require('../Controllers/Task');
const {celebrate} = require('celebrate');
const {createTask,updateTask,deleteTask} = require('./celebrates');
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
    router.route('/list/items').get(jwtAuthetication,TaskController.getTasks);
    router.route('/list/item/create').post(jwtAuthetication,celebrate(createTask),TaskController.createTask);
    router.route('/list/item/update').post(jwtAuthetication,celebrate(updateTask),TaskController.updateTask);
    router.route('/list/item/delete').delete(jwtAuthetication,celebrate(deleteTask),TaskController.deleteTask);
}