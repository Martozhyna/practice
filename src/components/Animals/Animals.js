import {createRef} from "react";

import css from "./Animals.module.css";
import {addCat, addDog, useAnimalsReducer} from "../../reducers";
import {Cat} from "../Cat/Cat";
import {Dog} from "../Dog/Dog";




function Animals () {

    const [state,dispatch] = useAnimalsReducer();

    const cat = createRef();

    const dog = createRef();


    const createCat = () => {
        dispatch({type: addCat, payload: cat.current.value});
        cat.current.value =''
    }

    const createDog = () => {
        dispatch({type: addDog, payload: dog.current.value});
        dog.current.value=''
    };


    return (
        <div className={css.Animals}>
            <div className={css.animal}>

                <h1>Cats:</h1>
                    <input type="text" ref={cat}/>
                <button onClick={createCat}>Save</button>
                <>
                    {
                        state.cats.map(value => <Cat key={value.id} item={value} dispatch={dispatch}/>)
                    }
                </>
            </div>

            <div className={css.animal}>
                <h1>Dogs:</h1>
                    <input type="text"  ref={dog}/>
                <button onClick={createDog}>Save</button>
                <>
                    {
                        state.dogs.map(value => <Dog key={value.id} item={value} dispatch={dispatch}/>)
                    }
                </>
            </div>

        </div>
    )
}
export {Animals}