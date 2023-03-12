import "./Button.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className = "", onClick }: Props) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
