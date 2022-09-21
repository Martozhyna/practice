function User (props) {
    let {item} = props;
    return (
        <div className={'card'}>
<h3>{item.id}. {item.name} </h3>
        </div>
    )
}
export default User