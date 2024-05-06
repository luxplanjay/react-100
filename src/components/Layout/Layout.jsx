import css from "./Layout.module.css";

export default function Layout({ children }) {
  return <main className={css.container}>{children}</main>;
}
