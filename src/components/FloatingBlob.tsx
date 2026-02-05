import { cn } from '@/utils/cn';

interface FloatingBlobProps {
  color: string;
  size: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  animationClass?: string;
  delay?: string;
  blur?: string;
}

export function FloatingBlob({ 
  color, 
  size, 
  position, 
  animationClass = 'animate-float',
  delay = '0s',
  blur = '60px'
}: FloatingBlobProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full animate-morph opacity-70',
        animationClass
      )}
      style={{
        background: color,
        width: size,
        height: size,
        ...position,
        filter: `blur(${blur})`,
        animationDelay: delay,
      }}
    />
  );
}
