import UserForm from "../UserForm/UserForm";
// import TextInput from "../TextInput/TextInput";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import OrderForm from "../OrderForm/OrderForm";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm />
      {/* <TextInput /> */}
      {/* <LangSwitcher /> */}
      {/* <OrderForm /> */}
    </div>
  );
}
