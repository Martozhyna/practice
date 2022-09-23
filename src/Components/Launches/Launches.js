import {useEffect, useState} from "react";
import {getLaunches} from "../../services/space/launches";
import Launching from "../Launching/Launching";

function Launches () {
    let [launches, setLaunches] = useState([]);
    useEffect( () =>{
        getLaunches().then(({data}) => {
            const filter = data.filter(user => user.launch_year != 2020);
            setLaunches(filter);
        })
    })

    return (
        <>
            <div className={'title'}>
                <h2>Launches</h2>
            </div>
            <div className={'rockets'}>
                {
                    launches.map( (value, index) => <Launching item={value} key={index}/>)
                }
            </div>

        </>
    )
}
export default Launches