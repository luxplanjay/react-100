import css from "./Error.module.css";

export default function Error({ children }) {
  return (
    <p className={css.text}>
      <b>{children}</b>
    </p>
  );
}
