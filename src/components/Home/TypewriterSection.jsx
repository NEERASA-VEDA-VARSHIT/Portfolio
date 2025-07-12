import { useRef, useEffect, useState } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { TYPEWRITER_TEXT, TYPEWRITER_AUTHOR, ANIMATION_SPEEDS } from "../../constants";

const TypewriterSection = () => {
  const { text, showAuthor } = useTypewriter(TYPEWRITER_TEXT, ANIMATION_SPEEDS.typewriter);

  const typewriterRef = useRef();
  const authorRef = useRef();
  const curveRef = useRef();
  const [typewriterRight, setTypewriterRight] = useState("4vw");
  const [authorRight, setAuthorRight] = useState("5vw");

  useEffect(() => {
    function checkOverlap() {
      if (!typewriterRef.current || !curveRef.current) return;
      const typeRect = typewriterRef.current.getBoundingClientRect();
      const curveRect = curveRef.current.getBoundingClientRect();
      
      if (typeRect.left < curveRect.right) {
        setTypewriterRight("12vw");
        setAuthorRight("13vw");
      } else {
        setTypewriterRight("4vw");
        setAuthorRight("5vw");
      }
    }
    
    window.addEventListener("resize", checkOverlap);
    checkOverlap();
    return () => window.removeEventListener("resize", checkOverlap);
  }, []);

  return (
    <>
      {/* Typewriter Effect Text */}
      <pre
        ref={typewriterRef}
        className="absolute text-right font-mono text-gray-500 opacity-70 max-w-[32vw] whitespace-pre-wrap
          right-[2vw] sm:right-[4vw] md:right-[6vw]
          bottom-[10vh] sm:bottom-[10vh] md:bottom-[12vh] z-50 custom-typewriter"
        style={{ lineHeight: 1.5, right: typewriterRight }}
      >
        {text}
      </pre>

      {/* Author Text */}
      {showAuthor && (
        <div
          ref={authorRef}
          className="absolute text-right font-mono text-gray-500 opacity-60 mt-2
            right-[3vw] sm:right-[5vw] md:right-[7vw]
            bottom-[8vh] sm:bottom-[6vh] md:bottom-[8vh] z-50 custom-typewriter"
          style={{ right: authorRight }}
        >
          {TYPEWRITER_AUTHOR}
        </div>
      )}

      <style>{`
        .custom-typewriter {
          font-size: clamp(15px, 1.5vw, 21px) !important;
        }
      `}</style>
    </>
  );
};

export default TypewriterSection; 