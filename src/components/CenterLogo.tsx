import { useState } from 'react';
import { cn } from '@/utils/cn';

export function CenterLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer rotating ring */}
      <div 
        className={cn(
          'absolute inset-0 rounded-full animate-rotate-slow',
          'border-2 border-dashed border-white/20'
        )}
        style={{ 
          width: '180px', 
          height: '180px',
          margin: '-30px'
        }}
      />

      {/* Inner counter-rotating ring */}
      <div 
        className={cn(
          'absolute inset-0 rounded-full animate-rotate-slow-reverse',
          'border border-white/10'
        )}
        style={{ 
          width: '160px', 
          height: '160px',
          margin: '-20px'
        }}
      />

      {/* Main logo container */}
      <div
        className={cn(
          'relative w-28 h-28 rounded-full',
          'flex items-center justify-center',
          'bg-gradient-to-br from-white/20 to-white/5',
          'backdrop-blur-xl border border-white/30',
          'transition-all duration-500',
          isHovered ? 'scale-110 shadow-2xl' : 'scale-100'
        )}
      >
        {/* Animated gradient orb inside */}
        <div 
          className={cn(
            'absolute w-16 h-16 rounded-full animate-pulse-soft',
            'bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400',
            'transition-all duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          style={{
            filter: 'blur(1px)'
          }}
        />

        {/* Logo icon */}
        <div className="relative z-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className={cn(
              'transition-all duration-500',
              isHovered ? 'rotate-180' : 'rotate-0'
            )}
          >
            {/* Color palette icon */}
            <circle cx="20" cy="12" r="6" fill="#FF6B6B" className="opacity-90" />
            <circle cx="12" cy="24" r="6" fill="#4ECDC4" className="opacity-90" />
            <circle cx="28" cy="24" r="6" fill="#FFE66D" className="opacity-90" />
            <circle cx="20" cy="20" r="4" fill="white" className="opacity-80" />
          </svg>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-2 h-2 rounded-full',
            'animate-float',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            background: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#3B82F6', '#EC4899'][i],
            top: `${Math.sin((i * 60 * Math.PI) / 180) * 70 + 50}px`,
            left: `${Math.cos((i * 60 * Math.PI) / 180) * 70 + 50}px`,
            animationDelay: `${i * 100}ms`,
            transition: 'opacity 0.3s ease',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
}
