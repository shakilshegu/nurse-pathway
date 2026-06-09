import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-2">
        {label && (
          <label className="text-label-lg font-label-lg text-on-surface-variant">
            {label}
          </label>
        )}
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border ${
            error ? 'border-error' : 'border-outline-variant'
          } bg-white px-3 py-2 text-body-md text-on-surface ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
          ref={ref}
          {...props}
        />
        {error && <span className="text-label-sm text-error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
