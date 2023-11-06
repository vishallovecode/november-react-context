import "./button.css";
const Button = (props) => {
  const { children, buttonText } = props;
  return (
    <button className="button" {...props}>
      {buttonText || children}
    </button>
  );
};

export default Button;
