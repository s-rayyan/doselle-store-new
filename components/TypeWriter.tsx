import { useState, useEffect } from 'react';

interface TypeWriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export const TypeWriter = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = ""
}: TypeWriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && currentText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentPhrase.slice(0, prev.length + 1);
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};