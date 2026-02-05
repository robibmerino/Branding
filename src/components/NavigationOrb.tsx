import { useState } from 'react';
import { cn } from '@/utils/cn';

interface NavigationOrbProps {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  angle: number;
  radius: number;
  delay: number;
  onClick?: () => void;
}

export function NavigationOrb({ 
  icon, 
  label, 
  gradient, 
  angle, 
  radius, 
  delay,
  onClick 
}: NavigationOrbProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate position based on angle
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className="absolute opacity-0 animate-scale-in"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'relative group w-20 h-20 rounded-full nav-item',
          'flex items-center justify-center',
          'transition-all duration-500 ease-out',
          'hover:shadow-2xl'
        )}
        style={{ background: gradient }}
      >
        {/* Glow ring */}
        <div 
          className={cn(
            'absolute inset-0 rounded-full transition-all duration-500',
            isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
          )}
          style={{ 
            background: gradient,
            filter: 'blur(20px)',
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10 text-white text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Label tooltip */}
        <div 
          className={cn(
            'absolute left-1/2 -translate-x-1/2 whitespace-nowrap',
            'px-4 py-2 rounded-full glass text-white text-sm font-medium',
            'transition-all duration-300 pointer-events-none',
            isHovered 
              ? 'opacity-100 -bottom-14 translate-y-0' 
              : 'opacity-0 -bottom-10 translate-y-2'
          )}
        >
          {label}
        </div>

        {/* Pulse ring on hover */}
        <div 
          className={cn(
            'absolute inset-0 rounded-full border-2 border-white/30',
            'transition-all duration-700',
            isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
          )}
        />
      </button>
    </div>
  );
}
