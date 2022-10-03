import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {jsonPlaceholder} from "../../services";

function Posts () {
    let {id} = useParams();
    console.log(id);

    let [post,setPost]=useState([])

    useEffect(() => {
        jsonPlaceholder.getPostComments(id).then(({data}) => setPost(data))
    },[id])

    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p><b>Body:</b> {post.body}</p>
        </div>
    );
}
export {Posts}

// function Posts () {
//     return (
//         <div>
//             gfgfhh
//         </div>
//     )
// }
// export {Posts}