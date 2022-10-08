import css from "./Dog.module.css"
import {deleteDog} from "../../reducers";

function Dog (props) {
    let {item,dispatch} = props;
    return (
        <div className={css.Dog}>
            <h2>{item.name}</h2>
            <button onClick={()=> dispatch({type:deleteDog,payload: item.id})}>Delete</button>
        </div>
    )
}
export {Dog}