import { useState } from "react";

export default function UseMemoExample() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  console.log("Calculating value: a + b");
  const value = a + b;

  // console.log("Calculating memoizedValue: a + b");

  return (
    <div>
      <button onClick={() => setA(a + 1)}>Update a: {a}</button>
      <button onClick={() => setB(b + 1)}>Update b: {b}</button>
      <button onClick={() => setC(c + 1)}>Update c: {c}</button>
      <p>value: {value}</p>
    </div>
  );
}
