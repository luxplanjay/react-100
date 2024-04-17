import { useState } from "react";
import { useRef } from "react";

/**
 * - Створення та ініціалізація
 * - Життєвий цикл рефа
 * - Відсутність реактивності
 */

export default function RefBasics() {
  const mountRef = useRef(Date.now());

  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p onClick={() => setClicks(clicks + 1)}>{clicks}</p>
      <p>mountRef: {mountRef.current}</p>
    </div>
  );
}
