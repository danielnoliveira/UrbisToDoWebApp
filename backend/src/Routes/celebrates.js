const {Joi, Segments} = require("celebrate");
module.exports = {
    createTask:{
        [Segments.BODY]: Joi.object().keys({
            name:Joi.string().required(),
        }),
    },
    updateTask: {
        [Segments.BODY]: Joi.object().keys({
            id_task: Joi.number().integer().required(),
            name: Joi.string().optional(),
            concluded: Joi.boolean().optional(),
        }),
    },
    deleteTask:{
        [Segments.BODY]: Joi.object().keys({
            id_task: Joi.number().integer().required(),
        }),
    },
    signin: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required(),
        }),
    },
    signup: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            name: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }
}