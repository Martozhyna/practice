import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-z]{3,25}$/).required().messages({
        'string.pattern.base':'Only letters. Min. 3, max. 25'
    }),
    email: Joi.string().required(),
    body: Joi.string().regex(/^[a-zA-z]{3,200}$/).messages({
        'string.pattern.base':'Only letters. Min. 3, max. 200'
    }),
    postId: Joi.number().min(1).max(100).required()
})

export {
    commentValidator
}