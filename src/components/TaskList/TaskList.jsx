import Task from "../Task/Task";
import css from "./TaskList.module.css";

export default function TaskList() {
  return (
    <ul className={css.list}>
      {[].map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
