import React from "react";
import {Link} from "react-router-dom";

function Linkk () {
    return (
        <div>

            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/todos"}>Todos</Link></li>
                <li><Link to={"/albums"}>Albums</Link></li>
                <li><Link to={"/comments"}>Comments</Link></li>
            </ul>




        </div>
    )
}
export {Linkk}