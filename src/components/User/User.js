function User (props) {
    let {item,getUserInfo} = props;
    return (
        <div className={'information'}>
            <div className={'user'}></div>
            <h3>{item.id}. {item.name}</h3>
            <div className={'button'}>
                <button onClick={() => getUserInfo(item)}
                >Get details</button>
            </div>
        </div>
    )
}
export {User}