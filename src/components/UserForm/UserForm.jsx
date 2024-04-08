import { useId } from "react";
import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  const usernameId = useId();
  const roleId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    onAdd({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={usernameId}>Username</label>
        <input type="text" name="username" id={usernameId} />
      </div>

      <div className={css.group}>
        <label htmlFor={roleId}>Role</label>
        <select name="role" id={roleId}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
