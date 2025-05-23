
import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const createMatrixRain = () => {
      const matrixContainer = document.querySelector('.matrix-rain');
      if (!matrixContainer) return;

      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
      const columns = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 3 + 2}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        let text = '';
        for (let j = 0; j < Math.floor(Math.random() * 15) + 5; j++) {
          text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
      }
    };

    createMatrixRain();

    return () => {
      const matrixContainer = document.querySelector('.matrix-rain');
      if (matrixContainer) {
        matrixContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className="matrix-rain"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 opacity-95 z-[-2]"></div>
      <div className="fixed inset-0 grid-bg z-[-1]"></div>
    </>
  );
};

export default AnimatedBackground;
