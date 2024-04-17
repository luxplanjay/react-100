// import UseMemoExample from "./UseMemoExample";
// import RefBasics from "./RefBasics";
// import RefExample from "./RefExample";
// import TimerRef from "./Timer";
import LangSwitcher from "./LangSwitcher";
import { useLang } from "../context/langContext";
import { useTheme } from "../context/themeContext";

export default function App() {
  const value = useLang();
  const themeCtx = useTheme();

  return (
    <div>
      {/* <UseMemoExample /> */}
      {/* <RefBasics /> */}
      {/* <RefExample /> */}
      {/* <TimerRef /> */}

      <LangSwitcher />
      <p>Selected lang: {value.lang}</p>
      <p>Current theme: {themeCtx.theme}</p>
    </div>
  );
}
