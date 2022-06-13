import "./Button.css";

export default function Button(props) {
  return (
    <div className="Button">
      <button className={props.className}>
        {props.img}
        {props.text}
      </button>
    </div>
  );
}
