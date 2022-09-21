import {rickAndMorty} from "../../array/rickAndMorty";
import RickAndMorty from "../RickAndMorty/RickAndMorty";

function RickAndMortys () {
    return (
        <>
            {
                rickAndMorty.map(value => <RickAndMorty item={value} key={value.id}/>)
            }
        </>
    )
}
export default RickAndMortys