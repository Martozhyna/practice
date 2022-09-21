function Simpsons (props) {
    let {itemName, itemPhrase, itemPhoto} = props;
    return (
        <div className={'simpson'}>
            <div className={'photo'}>
                <img src={itemPhoto} alt={itemName}/>
            </div>
            <div className={'inf'}>
                <h4>{itemName}</h4>
                <p>{itemPhrase}</p>
            </div>


        </div>
    )
}
export default Simpsons