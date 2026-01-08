import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <>
      {/* Main glow follower */}
      <motion.div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, hsl(187 100% 50% / 0.3) 0%, hsl(300 85% 55% / 0.1) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Secondary smaller follower */}
      <motion.div
        className="fixed pointer-events-none z-0 w-32 h-32 rounded-full opacity-40"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, hsl(187 100% 50% / 0.5) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </>
  );
}
