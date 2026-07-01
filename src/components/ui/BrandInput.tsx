import { forwardRef, type InputHTMLAttributes } from "react";

export interface BrandInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const BrandInput = forwardRef<HTMLInputElement, BrandInputProps>(
  ({ label, id, className = "", ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs uppercase tracking-[0.18em] text-ink/70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full border border-gold/50 bg-cream/40 px-4 py-3 font-sans text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${className}`}
          {...props}
        />
      </div>
    );
  },
);
BrandInput.displayName = "BrandInput";
