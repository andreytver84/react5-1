import "./CardImage.css";

function CardImage(props) {
    return (
        <img src={props.link} alt={props.text} />
    )
}

export default CardImage;