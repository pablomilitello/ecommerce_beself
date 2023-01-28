import "./button.scss";

function Button(props) {
  let styleButton = {
    backgroundColor: props.color,
    padding: props.padding,
    type: props.type,
    disabled: props.disabled,
  };

  return (
    <button onClick={props.onClick} className="btnProduct" style={styleButton}>
      {props.text}
    </button>
  );
}

export default Button;
