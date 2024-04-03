import ClickCounter from "../ClickCounter/ClickCounter";
// import Timer from "../Timer/Timer";
// import Reader from "../Reader/Reader";
// import articles from "../../articles.json";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <ClickCounter />
      {/* <Timer /> */}
      {/* <Reader items={articles} /> */}
    </div>
  );
}
