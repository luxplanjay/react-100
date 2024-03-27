import { HiAcademicCap } from "react-icons/hi";
import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return (
    <h1 className={css.text}>
      <HiAcademicCap className={css.icon} />
      {children}
    </h1>
  );
}
