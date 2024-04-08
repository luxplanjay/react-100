import css from "./LangSwitcher.module.css";
export default function LangSwitcher() {
  return (
    <div className={css.wrapper}>
      <span>Lang switcher</span>
      <select>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
