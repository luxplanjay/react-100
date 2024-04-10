import UserForm from "../UserForm/UserForm";
import css from "./App.module.css";

export default function App() {
  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  return (
    <div className={css.container}>
      <h1>Forms with Formik</h1>
      <UserForm onAdd={handleAddUser} />
    </div>
  );
}
