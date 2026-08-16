import { cn } from '@/lib/utils';

type BrandLogoVariant = 'app-icon' | 'icon-black' | 'icon-white' | 'full-black';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  decorative?: boolean;
  eager?: boolean;
}

const brandAssets: Record<BrandLogoVariant, { src: string; width: number; height: number }> = {
  'app-icon': { src: '/brand/fm-app-icon.png', width: 800, height: 800 },
  'icon-black': { src: '/brand/fm-icon-black.png', width: 1600, height: 1600 },
  'icon-white': { src: '/brand/fm-icon-white.png', width: 1600, height: 1600 },
  'full-black': { src: '/brand/fm-logo-full-black.png', width: 1920, height: 1280 },
};

export function BrandLogo({
  variant = 'app-icon',
  className,
  decorative = false,
  eager = false,
}: BrandLogoProps) {
  const asset = brandAssets[variant];

  return (
    <img
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={decorative ? '' : 'FM Consulting ZA'}
      className={cn('block object-contain select-none', className)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  );
}
