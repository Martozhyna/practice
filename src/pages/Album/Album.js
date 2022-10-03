function Album (props) {
    let {item} = props;
    return (
        <div>
            <h2>{item.id}. {item.title}</h2>
        </div>
    )
}
export {Album}