import { useEffect, useState } from "react";

export const useCountdown = (initialCountdown: number) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setHasFinished(true);
          return prevCountdown;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCountdown]);

  return { countdown, hasFinished };
};
