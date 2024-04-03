import { useState, useEffect } from "react";

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("clickCount");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickCounter() {
  const [clicks, setClicks] = useState(getInitialClicks);

  const updateClicks = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };

  useEffect(() => {
    localStorage.setItem("clickCount", clicks);
  }, [clicks]);

  const [date, setDate] = useState(Date.now());

  const updateDate = () => {
    setDate(Date.now());
  };

  useEffect(() => {
    console.log("useEffect on mount");
  }, []);

  useEffect(() => {
    console.log("useEffect", date);
  }, [date]);

  return (
    <>
      <button onClick={updateClicks}>Clicks: {clicks}</button>
      <button onClick={resetClicks}>Reset clicks</button>
      <button onClick={updateDate}>Date: {date}</button>
    </>
  );
}
