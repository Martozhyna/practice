function Launching (props) {
    let {item} = props;
    return (
        <div>
            <h3>{item.mission_name}</h3>
            <p>Year: {item.launch_year}</p>
            <img src={item.links.mission_patch_small} alt=""/>
        </div>
    )
}
export default Launching