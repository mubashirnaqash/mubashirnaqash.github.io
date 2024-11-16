import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
  const profilePhotoUrl = process.env.NODE_ENV === 'development'
    ? '/mubashir-photo.jpg'
    : `${process.env.PUBLIC_URL}/mubashir-photo.jpg`;

  return (
    <motion.div 
      className="w-64 h-64 relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img
          src={profilePhotoUrl}
          alt="Mubashir Naqash"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
