
import React, { useEffect } from 'react';

const EnhancedAnimatedBackground = () => {
  useEffect(() => {
    const createMatrixRain = () => {
      const matrixContainer = document.querySelector('.matrix-rain');
      if (!matrixContainer) return;

      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
      const columns = Math.floor(window.innerWidth / 15);

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 15}px`;
        column.style.animationDuration = `${Math.random() * 2 + 1}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        let text = '';
        for (let j = 0; j < Math.floor(Math.random() * 20) + 10; j++) {
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
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-90 z-[-2]"></div>
      <div className="fixed inset-0 animated-grid-bg z-[-1]"></div>
      
      {/* Enhanced floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="floating-element absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Geometric shapes with enhanced animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-[-1]">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-neon-cyan rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-neon-green rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-neon-purple animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-neon-cyan rotate-45 animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </>
  );
};

export default EnhancedAnimatedBackground;
