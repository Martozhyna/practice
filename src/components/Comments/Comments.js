import {useEffect, useState} from "react";

import {CommentForm} from "../CommentForm/CommentForm";
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

function Comments () {

    let [comments, setComments] = useState([]);
    useEffect(()=>{
        commentService.getAll().then(({data}) => setComments(data));
    })


    return (
        <div>
            <CommentForm/>
            <hr/>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
export {Comments}