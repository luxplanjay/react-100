import { useEffect, useState } from "react";

/**
 * Подвійне монтування і запуск інтервала
 * Очистка інтевала у ефекті
 * Очистка інтевала поза ефектом через ref
 */

const Timer = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(Date.now());
    }, 1000);
  }, []);

  // const stopInterval = () => {
  // };

  return (
    <div>{/* <button onClick={stopInterval}>Stop interval</button> */}</div>
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
