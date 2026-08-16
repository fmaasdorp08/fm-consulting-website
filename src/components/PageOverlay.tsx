import { cn } from '@/lib/utils';
import { BrandLogo } from '@/components/BrandLogo';

interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading FM Consulting ZA"
      className={cn(
        'fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ease-out-cubic',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex flex-col items-center gap-5">
        <BrandLogo
          variant="full-black"
          decorative
          eager
          className="w-[26rem] max-w-[82vw] animate-pulse"
        />
        <div className="w-32 h-0.5 bg-exvia-subtle overflow-hidden">
          <div className="h-full bg-exvia-black animate-[slide_1s_ease-in-out_infinite] w-1/3 rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
