import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'sm' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  let baseClasses = 'inline-flex items-center justify-center rounded-md font-label-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200';
  
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary-container text-on-primary-container hover:brightness-110 shadow-sm';
      break;
    case 'secondary':
      variantClasses = 'border border-outline text-primary hover:bg-surface-container-high';
      break;
    case 'tertiary':
      variantClasses = 'text-secondary hover:underline underline-offset-4';
      break;
  }

  let sizeClasses = '';
  switch (size) {
    case 'default':
      sizeClasses = 'h-10 px-6 py-2';
      break;
    case 'sm':
      sizeClasses = 'h-8 px-3 text-label-sm';
      break;
    case 'lg':
      sizeClasses = 'h-12 px-8 py-4 text-title-lg';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
