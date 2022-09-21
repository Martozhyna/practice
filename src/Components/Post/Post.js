function Post ({item}) {
    return (
        <div className={'card'}>
            <h3>{item.id}. {item.title}</h3>
        </div>
    )
}
export default Post