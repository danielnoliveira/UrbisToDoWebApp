const Task = require('../Database/Models/Task');

module.exports = {
    getTasks: async (req,res) => {
        const {userId} = req; 
        const result = await Task.findAll({where:{id_user:userId}});
        res.json(result);
    },
    createTask: async (req,res) => {
        const {name} = req.body;
        const {userId} = req;
        const task = await Task.create({
            name,
            id_user:userId
        },);
        res.json(task);
    },
    updateTask: async (req,res) => {
        const {name,concluded,id_task} = req.body;
        const {userId} = req;
        const task = await Task.update({
            name,
            concluded, 
        },{
            where:{
                id_user:userId,
                id:id_task
            }
        });
        res.json(task);
    },
    deleteTask: async (req,res) => {
        const {id_task} = req.body;
        const task = await Task.destroy({where:{id:id_task}});
        res.json(task);
    }
}