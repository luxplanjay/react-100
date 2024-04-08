import css from "./TextInput.module.css";

export default function TextInput({ value, onType }) {
  return (
    <div className={css.wrapper}>
      <span>Text input</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onType(event.target.value)}
      />
    </div>
  );
}
