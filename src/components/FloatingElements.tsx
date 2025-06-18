
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingElements = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; size: number }>>([]);

  useEffect(() => {
    // Generate floating hearts
    const heartElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
    }));
    setHearts(heartElements);

    // Generate twinkling stars
    const starElements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setStars(starElements);
  }, []);

  return (
    <>
      {/* Floating Hearts */}
      <div className="floating-hearts">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart size={16} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingElements;
