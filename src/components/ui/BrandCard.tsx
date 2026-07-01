import type { ReactNode } from "react";
import { BrandButton } from "./BrandButton";

export interface BrandCardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export function BrandCard({
  eyebrow,
  title,
  description,
  price,
  ctaLabel,
  onCtaClick,
  imageUrl,
  imageAlt = "",
  children,
}: BrandCardProps) {
  return (
    <article className="flex flex-col overflow-hidden border border-gold/40 bg-cream/60 shadow-sm transition-shadow hover:shadow-md">
      {imageUrl && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
        )}
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-ink/75">{description}</p>
        )}
        {children}
        {(price || ctaLabel) && (
          <div className="mt-4 flex items-center justify-between border-t border-gold/30 pt-4">
            {price && (
              <span className="font-display text-lg text-ink">{price}</span>
            )}
            {ctaLabel && (
              <BrandButton size="sm" onClick={onCtaClick}>
                {ctaLabel}
              </BrandButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
