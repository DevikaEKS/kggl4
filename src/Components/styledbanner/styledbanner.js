
import React, { useRef, useEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';


export const Mainstyledbanner = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div className="container-fluid h-75" ref={vantaRef}>
    
  </div>;
};


