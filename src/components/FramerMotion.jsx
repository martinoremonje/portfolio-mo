import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      ¡Hola, Framer Motion!
    </motion.div>
  );
};

export default AnimatedBox;