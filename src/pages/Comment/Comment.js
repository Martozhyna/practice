import {Link} from "react-router-dom";

function Comment (props) {
    let {item} = props;
    return (
        <div>
            <Link to={`posts/${item.postId}`}>
                <h2>{item.id}. {item.name}</h2>
            </Link>

            {/*<div>*/}
            {/*    <Link to={'/posts/' + item.postId} state={{...item}}>details</Link>*/}
            {/*</div>*/}
        </div>
    )
}
export {Comment}