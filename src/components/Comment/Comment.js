import css from './Comment.module.css'



function Comment (props) {
    let {item} = props;
    return (
        <div className={css.comments}>
            <div className={css.Comment}>
                <h3>{item.id}. {item.name}</h3>
                <p>Email: {item.email}
                    <br/>
                    Body: {item.body}</p>
            </div>
        </div>
    );
}
export {
    Comment
}