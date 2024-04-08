import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import TextInput from "../TextInput/TextInput";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import OrderForm from "../OrderForm/OrderForm";
import css from "./App.module.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [lang, setLang] = useState("uk");

  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  const makeOrder = (newOrder) => {
    console.log("makeOrder", newOrder);
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>

      <UserForm onAdd={handleAddUser} />

      <TextInput value={inputValue} onType={setInputValue} />
      <p>Text: {inputValue}</p>

      <LangSwitcher value={lang} onChangeLang={setLang} />
      <p>Selected lang: {lang}</p>

      <OrderForm onOrder={makeOrder} />
    </div>
  );
}
