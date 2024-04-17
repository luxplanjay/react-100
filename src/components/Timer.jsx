import { useEffect, useRef, useState } from "react";

/**
 * Подвійне монтування і запуск інтервала
 * Очистка інтевала у ефекті
 * Очистка інтевала поза ефектом через ref
 */

const Timer = () => {
  const [clicks, setClicks] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log(Date.now());
    }, 1000);
    console.log("useEffect", intervalRef);

    return () => {
      console.log("cleanup", intervalRef);
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopInterval = () => {
    console.log("stopInterval", intervalRef);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Timer</p>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
      <button onClick={stopInterval}>Stop interval</button>
    </div>
  );
};

export default function TimerWrapper() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Timer />}
    </div>
  );
}
