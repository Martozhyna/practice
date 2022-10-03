import {useEffect, useState} from "react";

import {jsonPlaceholder} from "../../services";
import {Comment} from "../Comment/Comment";

function Comments () {

    let [comment, setComment] = useState([]);
    useEffect(() => {
        jsonPlaceholder.getComments().then(({data}) => setComment(data))
    },[])


    return (
        <div>
            {
                comment.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
export {Comments}