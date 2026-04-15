import { useEffect, useState } from 'react';

const LINES = [
  '> initializing profile...',
  '> loading skills...',
  '> scanning targets...',
  '> vulnerabilities: classified',
  '> status: active',
];

export function useTypingEffect(startDelay = 600) {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= LINES.length) return;

    const line = LINES[currentLine];
    if (currentChar < line.length) {
      const delay = 30 + Math.random() * 30;
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCompletedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [started, currentLine, currentChar]);

  const currentTyping =
    currentLine < LINES.length ? LINES[currentLine].slice(0, currentChar) : '';
  const isDone = currentLine >= LINES.length;

  return { completedLines, currentTyping, isDone };
}
