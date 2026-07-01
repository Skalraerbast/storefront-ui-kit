import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-gold-foreground border border-gold hover:bg-ink hover:border-ink",
  outline:
    "bg-transparent text-ink border border-gold hover:bg-gold hover:text-gold-foreground",
  ghost:
    "bg-transparent text-ink border border-transparent hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-sm px-10 py-4",
};

export const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  ),
);
BrandButton.displayName = "BrandButton";
