import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  return (
    <div className="group relative">
      {/* Glow effect */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ filter: 'blur(8px)' }}
      />

      {/* Clock Face */}
      <div className="w-16 h-16 rounded-full border-2 border-[#7C3AED] relative flex items-center justify-center bg-gray-900/50 backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300">
        {/* MF Logo - Centered at top */}
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 z-30">
          <span className="text-[12px] font-bold bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent whitespace-nowrap filter drop-shadow-[0_0_2px_rgba(124,58,237,0.5)]">
            MF
          </span>
        </div>

        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 w-0.5 h-1.5 bg-[#7C3AED] transform -translate-x-1/2" />
          </div>
        ))}

        {/* Hands Container - Ensures perfect centering */}
        <div className="absolute w-0 h-0">
          {/* Hour Hand */}
          <motion.div
            className="absolute w-[3px] h-[14px] bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"
            style={{
              transformOrigin: '50% 100%',
              rotate: hourDegrees,
              bottom: '0px',
              left: '-1.5px',
            }}
            animate={{ rotate: hourDegrees }}
            transition={{ type: "tween", duration: 0.2 }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-[2px] h-[18px] bg-gradient-to-b from-[#7C3AED] to-[#EC4899] rounded-full"
            style={{
              transformOrigin: '50% 100%',
              rotate: minuteDegrees,
              bottom: '0px',
              left: '-1px',
            }}
            animate={{ rotate: minuteDegrees }}
            transition={{ type: "tween", duration: 0.2 }}
          />

          {/* Second Hand */}
          <motion.div
            className="absolute w-[1px] h-[20px] bg-[#EC4899] rounded-full"
            style={{
              transformOrigin: '50% 100%',
              rotate: secondDegrees,
              bottom: '0px',
              left: '-0.5px',
            }}
            animate={{ rotate: secondDegrees }}
            transition={{ type: "tween", duration: 0.2 }}
          />

          {/* Center Dot */}
          <div className="absolute w-2 h-2 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] rounded-full" style={{ top: '-4px', left: '-4px' }} />
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
