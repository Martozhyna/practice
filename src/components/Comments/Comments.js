import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {jsonPlaceholder} from "../../services";
import {Comment} from "../../pages";

function Comments () {

    let [comment, setComment] = useState([]);
    useEffect(() => {
        jsonPlaceholder.getComments().then(({data}) => setComment(data))
    },[])


    return (
        <div>
            <Outlet/>
            {
                comment.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
export {Comments}