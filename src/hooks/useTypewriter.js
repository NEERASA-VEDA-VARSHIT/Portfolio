import { useState, useEffect, useRef } from "react";

export const useTypewriter = (fullText, speed = 100) => {
  const [text, setText] = useState("");
  const [showAuthor, setShowAuthor] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length - 1) {
        setText((prev) => prev + fullText[indexRef.current]);
        indexRef.current++;
      } else {
        clearInterval(interval);
        setShowAuthor(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return { text, showAuthor };
}; 