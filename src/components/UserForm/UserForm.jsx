import css from "./UserForm.module.css";

export default function UserForm() {
  return (
    <form className={css.form}>
      <div className={css.group}>
        <label>Username</label>
        <input type="text" name="username" />
      </div>

      <div className={css.group}>
        <label>Role</label>
        <select name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
