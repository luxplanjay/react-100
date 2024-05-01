import { useSelector } from "react-redux";
import LangSwitcher from "../LangSwitcher";
import Balance from "../Balance";
import css from "./App.module.css";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div className={css.container}>
      <h1 className={css.pageTitle}>Redux Toolkit</h1>
      <Balance />
      <div>
        <LangSwitcher />
        <p>Selected lang: {lang}</p>
      </div>
    </div>
  );
}
