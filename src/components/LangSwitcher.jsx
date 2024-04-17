/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

import { useLang } from "../context/langContext";

export default function LangSwitcher() {
  const value = useLang();

  return (
    <select
      value={value.lang}
      onChange={(e) => value.changeLang(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
}
