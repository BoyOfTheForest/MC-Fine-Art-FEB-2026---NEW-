import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'outline-white' | 'text';
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary',
  className = '',
  type = "button"
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 tracking-wide uppercase rounded-full";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-transparent shadow-md hover:shadow-lg",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    // New variant for dark backgrounds: White Border/Text -> White BG / Black Text on Hover
    "outline-white": "border border-white text-white hover:bg-white hover:text-black",
    text: "text-gray-600 hover:text-black underline-offset-4 hover:underline p-0 rounded-none"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};