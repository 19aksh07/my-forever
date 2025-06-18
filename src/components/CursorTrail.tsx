
import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrail(prev => [...prev.slice(-5), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
