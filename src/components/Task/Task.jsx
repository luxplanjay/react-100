import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask } from "../../redux/tasksOps";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
