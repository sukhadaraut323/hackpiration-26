import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add trail
      trailId++;
      setTrails(prev => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const timer = setInterval(() => {
      setTrails(prev => prev.slice(-6));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail dots */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trails.length * 0.5,
          }}
        >
          <div 
            className="rounded-full bg-primary"
            style={{
              width: `${4 + index * 0.5}px`,
              height: `${4 + index * 0.5}px`,
              boxShadow: `0 0 ${8 + index * 2}px hsl(var(--primary) / 0.6)`,
            }}
          />
        </div>
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.3 : 1})`,
        }}
      >
        {/* Outer bracket corners */}
        <div className={`relative transition-all duration-200 ${isPointer ? 'rotate-45' : ''}`}>
          {/* Size container */}
          <div 
            className="relative"
            style={{ 
              width: isPointer ? '40px' : '32px', 
              height: isPointer ? '40px' : '32px',
              transition: 'all 0.2s ease'
            }}
          >
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-l-2 border-t-2 border-primary" 
                 style={{ boxShadow: '-2px -2px 8px hsl(var(--primary) / 0.5)' }} />
            
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-r-2 border-t-2 border-primary"
                 style={{ boxShadow: '2px -2px 8px hsl(var(--primary) / 0.5)' }} />
            
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-l-2 border-b-2 border-primary"
                 style={{ boxShadow: '-2px 2px 8px hsl(var(--primary) / 0.5)' }} />
            
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-r-2 border-b-2 border-primary"
                 style={{ boxShadow: '2px 2px 8px hsl(var(--primary) / 0.5)' }} />

            {/* Center dot */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{
                width: isPointer ? '6px' : '4px',
                height: isPointer ? '6px' : '4px',
                boxShadow: `0 0 12px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.5)`,
                transition: 'all 0.2s ease'
              }}
            />

            {/* Glow ring on hover */}
            {isPointer && (
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 animate-ping"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
