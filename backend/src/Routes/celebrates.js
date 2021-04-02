const {Joi, Segments} = require("celebrate");
module.exports = {
    createItem:{
        [Segments.BODY]: Joi.object().keys({
            name:Joi.string().required(),
            date:Joi.date().required(),
        }),
    },
    updateItem: {
        [Segments.QUERY]: Joi.object().keys({
            name: Joi.string().optional(),
            date: Joi.date().optional(),
        }),
    },
    login: {
        [Segments.BODY]: Joi.object().keys({
            login: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }
}