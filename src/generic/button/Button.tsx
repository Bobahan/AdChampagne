import React, { ReactNode } from 'react';
import './Button.css';

interface IButton {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
