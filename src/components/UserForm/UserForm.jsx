import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  return (
    <form className={css.form}>
      <div className={css.group}>
        <label>Username:</label>
        <input type="text" name="username" required />
      </div>

      <div className={css.group}>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>

      <div className={css.group}>
        <label>Role:</label>
        <select name="role" required>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className={css.group}>
        <label>Comment:</label>
        <textarea name="comment"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
