import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  isExternal = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}: ButtonProps) {
  // Define base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  // Define variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-transparent border border-white hover:border-blue-400 hover:text-blue-400 text-white',
    tertiary: 'text-blue-400 hover:text-blue-300 underline',
  };
  
  // Define size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-8 py-3',
  };
  
  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;
  
  // Icon JSX
  const iconJSX = icon && (
    <span className={iconPosition === 'right' ? 'ml-2' : 'mr-2'}>
      {icon}
    </span>
  );
  
  // If href is provided, it's a link
  if (href) {

    // External link
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconPosition === 'left' && iconJSX}
          {children}
          {iconPosition === 'right' && iconJSX}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link href={href} passHref>
        <span className={combinedStyles}>
          {iconPosition === 'left' && iconJSX}
          {children}
          {iconPosition === 'right' && iconJSX}
        </span>
      </Link>
    );
  }
  
  // Otherwise, it's a button
  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && iconJSX}
      {children}
      {iconPosition === 'right' && iconJSX}
    </button>
  );
}