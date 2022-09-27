import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../validators";
import {commentService} from "../../services";

function CommentForm ({setComments}) {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm({
        resolver: joiResolver(commentValidator),
        mode:'all'
    })


    const submit = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(comments => [...comments,data])
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="number" placeholder={'postId'} {...register('postId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    )
}
export {CommentForm}