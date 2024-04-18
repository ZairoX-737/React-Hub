import { useEffect } from "react";
import { useState } from "react";

export const useTimer = (initialTime, isRunning) => {
  const [time, setTime] = useState(initialTime);

  let hours = Math.floor(time / (60 * 60));
  let divisor_for_minutes = time % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);
  if (hours !== 0) {
    minutes += hours * 60;
  }

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };

  useEffect(() => {
    if (isRunning) {
      const customInterval = setInterval(() => {
        if (time > 0) {
          setTime((prev) => prev - 1);
        }
      }, 1000);

      return () => clearInterval(customInterval);
    }
  }, [isRunning, time]);
  return obj;
};
