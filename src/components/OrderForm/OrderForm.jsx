import { FaTshirt } from "react-icons/fa";
import css from "./OrderForm.module.css";

const initialValues = {
  size: "md",
  color: "blue",
};

export default function OrderForm() {
  return (
    <form autoComplete="off" noValidate className={css.form}>
      <FaTshirt size="160" />

      <div className={css.group}>
        <label>Size</label>
        <select name="size">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label>Color</label>
        <select name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
