import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import confetti from 'canvas-confetti';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  scale: number;
  particles: number;
}

const colors = [
  'from-[#4F46E5] to-[#7C3AED]',
  'from-[#7C3AED] to-[#EC4899]',
  'from-[#EC4899] to-[#4F46E5]',
  'from-[#38BDF8] to-[#818CF8]',
  'from-[#F472B6] to-[#EC4899]',
  'from-[#34D399] to-[#3B82F6]',
];

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [isActive, setIsActive] = useState(true);

  // Define fire function outside try block
  const fire = (particleRatio: number, opts: any, defaults: any) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(particleRatio * 100),
    });
  };

  const fireConfetti = () => {
    try {
      const defaults = {
        origin: { y: 0.9 },
        zIndex: 1000,
        scalar: 0.5,
      };

      // Multiple smaller bursts
      fire(0.25, {
        spread: 20,
        startVelocity: 35,
        colors: ['#4F46E5', '#7C3AED', '#EC4899'],
      }, defaults);

      fire(0.2, {
        spread: 30,
        colors: ['#38BDF8', '#818CF8', '#F472B6'],
      }, defaults);

      fire(0.35, {
        spread: 45,
        decay: 0.91,
        scalar: 0.5,
        colors: ['#34D399', '#3B82F6', '#EC4899'],
      }, defaults);

      fire(0.1, {
        spread: 50,
        startVelocity: 25,
        decay: 0.92,
        scalar: 0.6,
        colors: ['#4F46E5', '#7C3AED', '#EC4899'],
      }, defaults);

      fire(0.1, {
        spread: 45,
        startVelocity: 35,
        colors: ['#38BDF8', '#818CF8', '#F472B6'],
      }, defaults);
    } catch (error) {
      console.error('Error firing confetti:', error);
    }
  };

  useEffect(() => {
    if (!isActive) return;

    fireConfetti();

    const createFirework = () => {
      const newFirework = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: 0.5 + Math.random() * 1.5,
        particles: 8 + Math.floor(Math.random() * 8),
      };

      setFireworks(prev => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
      }, 1500);
    };

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createFirework();
        if (i % 2 === 0) fireConfetti();
      }, i * 300);
    }

    const interval = setInterval(() => {
      createFirework();
      if (Math.random() > 0.7) fireConfetti();
    }, 500);

    setTimeout(() => {
      setIsActive(false);
      clearInterval(interval);
    }, 5000);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireworks.map((firework) => (
        <motion.div
          key={firework.id}
          className={`absolute w-2 h-2 bg-gradient-to-r ${firework.color}`}
          style={{ 
            left: `${firework.x}%`, 
            top: `${firework.y}%`,
            filter: 'blur(0.5px)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, firework.scale, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          {[...Array(firework.particles)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${firework.color}`}
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                x: [0, Math.cos(i * (360 / firework.particles) * Math.PI / 180) * 50],
                y: [0, Math.sin(i * (360 / firework.particles) * Math.PI / 180) * 50],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              style={{
                filter: 'blur(0.5px)',
              }}
            />
          ))}

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white"
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 30],
                y: [0, (Math.random() - 0.5) * 30],
              }}
              transition={{
                duration: 0.8,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
              style={{
                filter: 'blur(0.2px)',
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Fireworks;
