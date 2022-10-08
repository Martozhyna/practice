import {useReducer} from "react";

import {addCat, addDog, deleteCat, deleteDog} from "../animals.actions/animals.actions";


const reducer = (state,action) => {
    switch (action.type) {
        case addCat:
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]};

        case deleteCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};

        case addDog:
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]};

        case deleteDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};

        default:
            return state;


    }
}
const useAnimalsReducer = () => useReducer(reducer, {cats: [], dogs: []});

export {useAnimalsReducer};
  
