import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text: fullText, speed = 100 }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [fullText, speed]);

  return (
    <div className="absolute bottom-10 right-10 text-lg font-mono text-gray-800">
      {text}
    </div>
  );
};

export default TypewriterEffect;