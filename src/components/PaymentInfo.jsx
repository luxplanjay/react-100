export default function PaymentInfo({ payment }) {
  return (
    <div>
      <p>Amount: {payment.amount}</p>
      <p>Number: {payment.cardNumber}</p>
      <p>Owner: {payment.cardOwner}</p>
      <p>Type: {payment.cardType}</p>
      <p>Descrioption: {payment.description}</p>
    </div>
  );
}
