function Launching (props) {
    let {item} = props;
    return (
        <div className={'rocket'}>
            <h3> {item.flight_number}.{item.mission_name}</h3>
            <p>Year: {item.launch_year}</p>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>
        </div>
    )
}
export default Launching