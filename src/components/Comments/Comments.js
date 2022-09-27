import {useEffect, useState} from "react";

import style from './Comments.module.css'
import {CommentForm} from "../CommentForm/CommentForm";
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

function Comments () {

    let [comments, setComments] = useState([]);
    useEffect(()=>{
        commentService.getAll().then(({data}) => setComments(data));
    })


    return (
        <>
            <CommentForm setComments={setComments}/>
            <hr/>
            <div className={style.Comments}>
                {
                    comments.map((value, index) => <Comment key={index} item={value}/>)
                }
            </div>

        </>
    );
}
export {Comments}