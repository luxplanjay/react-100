import css from "./Task.module.css";

export default function Task({ task }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>Delete</button>
    </div>
  );
}
