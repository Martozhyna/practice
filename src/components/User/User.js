import css from './User.module.css'

function User (props) {
    let {item} = props;
    return (

            <div className={css.Users}>
                <div className={css.user}>
                    <h2>{item.id}. {item.name}</h2>
                    <p>Username: {item.username}</p>
                </div>
            </div>


    );
}
export {
    User
}