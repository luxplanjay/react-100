import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ variant, type = "button", children }) {
  const btnClasses = clsx(css.btn, {
    [css.primary]: variant == "primary",
    [css.secondary]: variant == "secondary",
  });

  // const btnClasses = clsx(css.btn, css[variant]);

  return (
    <button className={btnClasses} type={type}>
      {children}
    </button>
  );
}
