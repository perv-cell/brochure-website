'use client';
import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}:TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return;

    let timeout;

    if (!isDeleting && currentText === texts[currentTextIndex]) {
      timeout = setTimeout(() => { setIsDeleting(true) }, pauseDuration)
    } else if (isDeleting && currentText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    },200)
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          const fullText = texts[currentTextIndex];
          return isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        });
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => { clearTimeout(timeout); }
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]
  );

  return (
    <span className={className}>
      {currentText}
    </span>
  )
}
