import { useState, useEffect } from "react";
import css from "./Loader.module.css";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={css.text}>
      <b>
        {children}
        {dots}
      </b>
    </p>
  );
}
