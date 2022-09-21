function RickAndMorty (props) {
    let {item} = props;
    return (
        <div className={'card'}>
            <div className={'photo'}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={'inf'}>
                <h4>{item.id}. {item.name}</h4>
                <p> <b>Status:</b> {item.status}
                <br/>
                    <b>Species:</b> {item.species}
                    <br/>
                    <b>Gender:</b> {item.gender}
                </p>
            </div>
        </div>
    )
}
export default RickAndMorty