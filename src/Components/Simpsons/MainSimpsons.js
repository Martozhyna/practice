import {simpsons} from "../../array/simpsonsArray";
import MainSimpson from "../Simpson/MainSimpson";

function MainSimpsons () {
    return (
        <>
            {
                simpsons.map((value,index) => <MainSimpson itemName={value.name} itemPhrase={value.info} itemPhoto={value.photo} key={index}/>)
            }
        </>
    )
}
export{MainSimpsons}