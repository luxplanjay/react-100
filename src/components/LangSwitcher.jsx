import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div>
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
