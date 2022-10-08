import css from "./Cat.module.css"
import {deleteCat} from "../../reducers";

function Cat (props) {
    let {item,dispatch} = props;
    return (
        <div className={css.Cat}>
            <h2>{item.name}</h2>
            <button onClick={()=> dispatch({type:deleteCat,payload: item.id})}>Delete</button>
        </div>
    )
}
export {Cat}