const {Joi, Segments} = require("celebrate");
module.exports = {
    createItem:{
        [Segments.BODY]: Joi.object().keys({
            name:Joi.string().required(),
        }),
    },
    updateItem: {
        [Segments.BODY]: Joi.object().keys({
            id_task: Joi.number().integer().required(),
            name: Joi.string().optional(),
            concluded: Joi.boolean().optional(),
        }),
    },
    deleteItem:{
        [Segments.BODY]: Joi.object().keys({
            id_task: Joi.number().integer().required(),
        }),
    },
    login: {
        [Segments.BODY]: Joi.object().keys({
            login: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }
}