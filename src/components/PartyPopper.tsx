import React, { useEffect, useState } from 'react';
// @ts-ignore
import confetti from 'canvas-confetti';

interface PartyPopperProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  interval?: number;
  size?: 'small' | 'normal';
}

const PartyPopper: React.FC<PartyPopperProps> = ({ 
  position = 'top-right',
  interval = 2000,
  size = 'normal'
}) => {
  const [isActive, setIsActive] = useState(true);

  const getOrigin = () => {
    switch (position) {
      case 'top-left':
        return { x: 0.1, y: 0.1 };
      case 'top-right':
        return { x: 0.9, y: 0.1 };
      case 'bottom-left':
        return { x: 0.1, y: 0.9 };
      case 'bottom-right':
        return { x: 0.9, y: 0.9 };
      default:
        return { x: 0.5, y: 0.5 };
    }
  };

  const getConfig = () => {
    const isSmall = size === 'small';
    return {
      particleCount: isSmall ? 15 : 30,
      spread: isSmall ? 30 : 40,
      scalar: isSmall ? 0.3 : 0.5,
      startVelocity: isSmall ? 15 : 20,
      gravity: isSmall ? 0.6 : 0.8,
      ticks: isSmall ? 150 : 200,
      decay: isSmall ? 0.9 : 0.95,
    };
  };

  const fire = () => {
    try {
      const origin = getOrigin();
      const config = getConfig();
      confetti({
        ...config,
        origin,
        zIndex: 1000,
        colors: ['#4F46E5', '#7C3AED', '#EC4899', '#38BDF8', '#34D399'],
      });
    } catch (error) {
      console.error('Error firing confetti:', error);
    }
  };

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(fire, interval);
    return () => clearInterval(timer);
  }, [interval, isActive]);

  return null;
};

export default PartyPopper;
