const Task = require('../Database/Models/Task');

module.exports = {
    getTasks: async (req,res) => {
        // #swagger.tags = ['Task']
        const {userId} = req; 
        const result = await Task.findAll({where:{id_user:userId, concluded: false}});
        res.json(result);
    },
    createTask: async (req,res) => {
        // #swagger.tags = ['Task']
        const {name} = req.body;
        const {userId} = req;
        const task = await Task.create({
            name,
            id_user:userId
        },);
        res.json(task);
    },
    updateTask: async (req,res) => {
        // #swagger.tags = ['Task']
        const {name,concluded,id_task} = req.body;
        const task = await Task.findByPk(id_task);
        task.name = name;
        task.concluded = concluded;
        await task.save();
        res.json(task);
    },
    deleteTask: async (req,res) => {
        // #swagger.tags = ['Task']
        const {id_task} = req.body;
        const task = await Task.findByPk(id_task);
        await task.destroy();
        res.json(task);
    }
}