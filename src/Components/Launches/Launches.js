import {useEffect, useState} from "react";
import {getLaunches} from "../../services/space/launches";
import Launching from "../Launching/Launching";

function Launches () {
    let [launches, setLaunches] = useState([]);
    useEffect(()=>{
        getLaunches()
            .then(value =>
                setLaunches(value.data))

    },[])

    return (
        <div>
            {
                launches.map( (value, index) => <Launching item={value} key={index}/>)
            }
        </div>
    )
}
export default Launches