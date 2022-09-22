function UserComponent (props) {
    let {item,chooseUser} = props
    return (
        <div className={'user'}>
            <h3>{item.id}. {item.name}</h3>
            <div className={'btn'}>
                <button onClick={()=>{
                    chooseUser(item.id);
                }}>information</button>
            </div>

        </div>
    )
}
export default UserComponent
