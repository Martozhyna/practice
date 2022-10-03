function Todo (props) {
    let {item} = props;
    return (
        <div>
            <h2>{item.id}. {item.title}</h2>
            <p><b>Completed:</b> {item.completed.toString()}</p>
        </div>
    )
}
export {Todo}