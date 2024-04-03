// import { useState } from "react";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Timer from "../Timer/Timer";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";

export default function App() {
  // const [isTimerVisible, setIsTimerVisible] = useState(false);

  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      {/* <ClickCounter /> */}
      {/* <button onClick={() => setIsTimerVisible(!isTimerVisible)}>
        {isTimerVisible ? "Hide" : "Show"}
      </button> */}
      {/* {isTimerVisible && <Timer />} */}
      <Reader items={articles} />
    </div>
  );
}
