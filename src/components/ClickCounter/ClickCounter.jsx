import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  const updateClicks = () => setClicks(clicks + 1);

  const [date, setDate] = useState(Date.now());
  const updateDate = () => setDate(Date.now());

  return (
    <>
      <button onClick={updateClicks}>Clicks: {clicks}</button>
      <button onClick={updateDate}>Date: {date}</button>
    </>
  );
}
