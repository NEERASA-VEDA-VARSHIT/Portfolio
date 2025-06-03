import React, { useRef, useEffect, useCallback } from 'react';

const NoiseCanvas = () => {
  const canvasRef = useRef(null);

  const generateTexture = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 60 + 165;
      const alpha = Math.random() * 0.3 + 0.15;
      data[i] = noise + 15;
      data[i + 1] = noise + 10;
      data[i + 2] = noise - 5;
      data[i + 3] = alpha * 220;
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.requestAnimationFrame(generateTexture);
  }, [generateTexture]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 pointer-events-none"
    />
  );
};

export default NoiseCanvas;