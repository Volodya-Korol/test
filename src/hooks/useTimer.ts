import { useEffect, useState } from 'react';

export const useTimer = (seconds: number) => {
  const [timeRemaining, setTimeRemaining] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    if (timeRemaining <= 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeRemaining]);

  return timeRemaining;
};
