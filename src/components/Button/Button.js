import "./button.scss";

function Button(props) {
  let styleButton = {
    backgroundColor: props.color,
    padding: props.padding,
  };

  return (
    <button onClick={props.onClick} className="btnProduct" style={styleButton}>
      {props.text}
    </button>
  );
}

export default Button;
