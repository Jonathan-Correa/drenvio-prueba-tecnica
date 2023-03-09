import "./Card.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const Card = ({ children, className = '' }: Props) => {
  return <div className={`profile-card border ${className}`}>{children}</div>;
};

export default Card;
