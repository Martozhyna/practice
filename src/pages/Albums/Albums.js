import {useEffect, useState} from "react";

import {jsonPlaceholder} from "../../services";
import {Album} from "../Album/Album";



function Albums () {

    let [album, setAlbum] = useState([]);
    useEffect(() => {
        jsonPlaceholder.getAlbums().then(({data}) => setAlbum(data))
    },[])


    return (
        <div>
            {
                album.map(value => <Album key={value.id} item={value}/>)
            }
        </div>
    );
}
export {Albums}