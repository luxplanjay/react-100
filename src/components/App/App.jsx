import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import Toggler from "../Toggler/Toggler";
import css from "./App.module.css";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <Reader items={articles} />
      <hr />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <hr />
      <Toggler />
      <Toggler />
      <Toggler />
    </div>
  );
}
