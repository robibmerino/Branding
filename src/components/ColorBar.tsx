import { cn } from '@/utils/cn';

interface ColorBarProps {
  position: 'left' | 'right';
}

const leftColors = [
  'from-rose-500 to-pink-500',
  'from-orange-500 to-amber-500',
  'from-yellow-400 to-lime-400',
  'from-emerald-500 to-teal-500',
  'from-cyan-500 to-blue-500',
];

const rightColors = [
  'from-blue-500 to-indigo-500',
  'from-violet-500 to-purple-500',
  'from-fuchsia-500 to-pink-500',
  'from-rose-400 to-red-500',
  'from-slate-400 to-slate-600',
];

export function ColorBar({ position }: ColorBarProps) {
  const colors = position === 'left' ? leftColors : rightColors;
  const isLeft = position === 'left';

  return (
    <div
      className={cn(
        'fixed top-0 h-full flex flex-col justify-center gap-3 z-20',
        'py-8 px-2',
        isLeft ? 'left-0' : 'right-0'
      )}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className={cn(
            'w-2 h-16 rounded-full bg-gradient-to-b cursor-pointer',
            'transition-all duration-300 hover:w-4 hover:shadow-lg',
            'opacity-0 animate-slide-up',
            color
          )}
          style={{
            animationDelay: `${800 + index * 100}ms`,
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </div>
  );
}
