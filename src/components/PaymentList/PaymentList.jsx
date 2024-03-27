import PaymentCard from "../PaymentCard/PaymentCard";
import css from "./PaymentList.module.css";

export default function PaymentList({ payments }) {
  return (
    <ul className={css.list}>
      {payments.map((payment) => (
        <li key={payment.id} className={css.listItem}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}
