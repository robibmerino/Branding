import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { FloatingBlob } from '@/components/FloatingBlob';
import { NavigationOrb } from '@/components/NavigationOrb';
import { CenterLogo } from '@/components/CenterLogo';
import { ColorBar } from '@/components/ColorBar';
import {
  PaletteIcon,
  SwatchIcon,
  WandIcon,
  GradientIcon,
  ExportIcon,
  InspirationIcon,
} from '@/components/Icons';

const navigationItems = [
  {
    icon: <PaletteIcon />,
    label: 'Crear Paleta',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    angle: -90,
  },
  {
    icon: <SwatchIcon />,
    label: 'Mis Paletas',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    angle: -30,
  },
  {
    icon: <WandIcon />,
    label: 'Generador IA',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
    angle: 30,
  },
  {
    icon: <GradientIcon />,
    label: 'Degradados',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
    angle: 90,
  },
  {
    icon: <InspirationIcon />,
    label: 'Inspiración',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)',
    angle: 150,
  },
  {
    icon: <ExportIcon />,
    label: 'Exportar',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
    angle: 210,
  },
];

export function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(-45deg, #0f0f23, #1a1a3e, #0d1b2a, #1b2838, #0f172a)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Floating blobs */}
      <FloatingBlob
        color="linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)"
        size="500px"
        position={{ top: '-10%', left: '-10%' }}
        animationClass="animate-float"
        delay="0s"
        blur="80px"
      />
      <FloatingBlob
        color="linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"
        size="400px"
        position={{ bottom: '-15%', right: '-5%' }}
        animationClass="animate-float-reverse"
        delay="2s"
        blur="70px"
      />
      <FloatingBlob
        color="linear-gradient(135deg, #A855F7 0%, #6366F1 100%)"
        size="350px"
        position={{ top: '30%', right: '-10%' }}
        animationClass="animate-float"
        delay="1s"
        blur="60px"
      />
      <FloatingBlob
        color="linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)"
        size="300px"
        position={{ bottom: '20%', left: '-5%' }}
        animationClass="animate-float-reverse"
        delay="3s"
        blur="50px"
      />
      <FloatingBlob
        color="linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)"
        size="250px"
        position={{ top: '10%', right: '30%' }}
        animationClass="animate-float"
        delay="4s"
        blur="40px"
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Color bars on sides */}
      <ColorBar position="left" />
      <ColorBar position="right" />

      {/* Main content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Title */}
        <div 
          className={cn(
            'text-center mb-16 opacity-0',
            isLoaded && 'animate-slide-up'
          )}
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Chrom
            </span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-color-wave">
              ática
            </span>
          </h1>
          <p 
            className={cn(
              'mt-4 text-lg text-white/50 tracking-widest uppercase opacity-0',
              isLoaded && 'animate-fade-in'
            )}
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            Palette Studio
          </p>
        </div>

        {/* Central navigation */}
        <div className="relative flex items-center justify-center">
          {/* Orbital rings decoration */}
          <div 
            className="absolute w-[420px] h-[420px] rounded-full border border-white/5 animate-rotate-slow"
          />
          <div 
            className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-white/10 animate-rotate-slow-reverse"
          />
          <div 
            className="absolute w-[260px] h-[260px] rounded-full border border-white/5"
          />

          {/* Navigation orbs */}
          <div className="relative flex items-center justify-center">
            {navigationItems.map((item, index) => (
              <NavigationOrb
                key={index}
                icon={item.icon}
                label={item.label}
                gradient={item.gradient}
                angle={item.angle}
                radius={180}
                delay={300 + index * 100}
              />
            ))}

            {/* Center logo */}
            <div 
              className={cn(
                'opacity-0',
                isLoaded && 'animate-scale-in'
              )}
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              <CenterLogo />
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <div 
          className={cn(
            'absolute bottom-12 text-center opacity-0',
            isLoaded && 'animate-fade-in'
          )}
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
        >
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-white/30" />
            <span className="tracking-widest uppercase text-xs">Explora</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-white/30" />
          </div>
          <div className="mt-3 flex justify-center">
            <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="fixed top-6 left-6 z-20">
        <div 
          className={cn(
            'flex items-center gap-2 opacity-0',
            isLoaded && 'animate-fade-in'
          )}
          style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-violet-400 to-fuchsia-400" />
          </div>
          <span className="text-white/50 text-sm font-medium tracking-wider">v1.0</span>
        </div>
      </div>

      <div className="fixed top-6 right-6 z-20">
        <button 
          className={cn(
            'px-4 py-2 rounded-full glass text-white/70 text-sm font-medium',
            'hover:bg-white/20 transition-all duration-300',
            'opacity-0',
            isLoaded && 'animate-fade-in'
          )}
          style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Branding 2024
          </span>
        </button>
      </div>

      {/* Floating color swatches decoration */}
      <div 
        className={cn(
          'fixed bottom-6 left-6 flex gap-1 opacity-0',
          isLoaded && 'animate-fade-in'
        )}
        style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
      >
        {['#FF6B6B', '#4ECDC4', '#A855F7', '#3B82F6', '#F59E0B'].map((color, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-md cursor-pointer transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 4px 12px ${color}40`
            }}
          />
        ))}
      </div>

      {/* Bottom right info */}
      <div 
        className={cn(
          'fixed bottom-6 right-6 text-right opacity-0',
          isLoaded && 'animate-fade-in'
        )}
        style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
      >
        <p className="text-white/30 text-xs tracking-widest uppercase">Universidad</p>
        <p className="text-white/50 text-sm font-medium">Asignatura de Branding</p>
      </div>
    </div>
  );
}
