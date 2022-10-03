import {useEffect, useState} from "react";

import {jsonPlaceholder} from "../../services";
import {Todo} from "../../pages/Todo/Todo";

function Todos () {

    let [todo, setTodo] = useState([]);
    useEffect(() => {
        jsonPlaceholder.getTodos().then(({data}) => setTodo(data))
    },[])


    return (
        <div>
            {
                todo.map(value => <Todo key={value.id} item={value}/>)
            }
        </div>
    );
}
export {Todos}