import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";
import css from "./TextFilter.module.css";

export default function TextFilter() {
  const dispatch = useDispatch();
  const id = useId();
  const textFilter = useSelector(selectTextFilter);

  const handleChange = event => {
    dispatch(changeTextFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input
        className={css.field}
        value={textFilter}
        onChange={handleChange}
        type="text"
        id={id}
      />
    </div>
  );
}
