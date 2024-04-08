import css from "./TextInput.module.css";

export default function TextInput() {
  return (
    <div className={css.wrapper}>
      <span>Text input</span>
      <input type="text" />
    </div>
  );
}
