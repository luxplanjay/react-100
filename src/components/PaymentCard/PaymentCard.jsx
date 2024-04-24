import { Link, useLocation } from "react-router-dom";
import css from "./PaymentCard.module.css";

export default function PaymentCard({
  payment: { id, cardOwner, amount, description },
}) {
  const location = useLocation();

  return (
    <div className={css.wrapper}>
      <p>
        <b>Card owner:</b> {cardOwner}
      </p>
      <p>
        <b>Amount:</b> {amount}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <Link to={`/payments/${id}`} state={location}>
        Details
      </Link>
    </div>
  );
}
