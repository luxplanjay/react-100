import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";

export default function App() {
  return (
    <>
      <PageTitle text="Payments" />
      <PaymentList payments={initialPayments} />
    </>
  );
}
