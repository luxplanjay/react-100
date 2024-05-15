/**
 * - Якщо користувач увійшов у систему, відобразити <Navigate> для перенаправлення
 * - В іншому випадку відобразити компонент
 */

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
