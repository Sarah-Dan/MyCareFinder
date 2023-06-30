// create a resuable button component

// import css file
import "./button.css";

const Button = ({ title, }) => {
    return (
        <button className="btn" >
        {title}
        </button>
    );
    }

export default Button;