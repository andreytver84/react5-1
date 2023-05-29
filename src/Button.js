import "./Button.css";

function Button(props) {
    return (
        <button href={props.link}>{props.text}</button>
    )
}

export default Button;