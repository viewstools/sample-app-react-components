import confetti from 'canvas-confetti';
import React, { useEffect, useRef } from 'react';

// see https://www.npmjs.com/package/canvas-confetti#options for the options
export default function Confetti({
  angle,
  colors,
  decay,
  height,
  onConfettiComplete,
  interval,
  duration,
  particleCount,
  shapes,
  spread,
  startVelocity,
  ticks,
  width,
  zIndex,
}) {
  let canvas = useRef();

  useEffect(() => {
    let fire = confetti.create(canvas.ref, {
      resize: true,
      useWorker: true,
    });
    let cancel = false;

    let end = Date.now() + duration;

    let intervalId = setInterval(function () {
      if (cancel) return;

      if (Date.now() > end) {
        clearInterval(intervalId);

        if (typeof onConfettiComplete === 'function') {
          onConfettiComplete();
        }

        return;
      }

      fire({
        particleCount,
        startVelocity,
        spread,
        angle,
        zIndex,
        decay,
        colors: colors.split(' ').filter(Boolean),
        shapes: shapes.split(' ').filter(Boolean),
        ticks,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2,
        },
      });
    }, interval);

    return () => (cancel = true);
  }, []); // eslint-disable-line
  // run once

  return (
    <canvas
      ref={canvas}
      style={{
        width,
        height,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  );
}

Confetti.defaultProps = {
  angle: 90,
  colors:
    '#f44336 #e91e63 #9c27b0 #673ab7 #3f51b5 #2196f3 #03a9f4 #00bcd4 #009688 #4CAF50 #8BC34A #CDDC39 #FFEB3B #FFC107 #FF9800 #FF5722 #795548',
  decay: 0.9,
  duration: 2000,
  interval: 250,
  gravity: 1,
  height: '100vh',
  particleCount: 100,
  shapes: 'square square circle',
  spread: 360,
  startVelocity: 45,
  ticks: 60,
  width: '100vw',
  zIndex: 100,
};
