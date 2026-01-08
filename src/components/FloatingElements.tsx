import { motion } from 'framer-motion';

const floatingShapes = [
  { size: 60, x: '10%', y: '20%', delay: 0, duration: 8, color: 'from-primary/20 to-primary/5' },
  { size: 40, x: '85%', y: '15%', delay: 1, duration: 10, color: 'from-secondary/20 to-secondary/5' },
  { size: 80, x: '75%', y: '60%', delay: 2, duration: 12, color: 'from-accent/20 to-accent/5' },
  { size: 50, x: '5%', y: '70%', delay: 0.5, duration: 9, color: 'from-primary/15 to-secondary/10' },
  { size: 30, x: '50%', y: '80%', delay: 1.5, duration: 7, color: 'from-secondary/20 to-accent/10' },
  { size: 45, x: '30%', y: '10%', delay: 2.5, duration: 11, color: 'from-accent/15 to-primary/5' },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} backdrop-blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Floating lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            width: `${100 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            rotate: `${-15 + i * 10}deg`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
