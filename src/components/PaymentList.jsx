import PaymentCard from "./PaymentCard";

export default function PaymentList({ payments }) {
  return (
    <ul>
      {payments.map((payment) => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}
