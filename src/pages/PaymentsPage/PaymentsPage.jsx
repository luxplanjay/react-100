import { useEffect, useState } from "react";
import PaymentList from "../../components/PaymentList/PaymentList";
import { getPayments } from "../../payments-api";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPayments() {
      try {
        setLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  return (
    <div>
      <p>
        <b>PaymentsPage</b>
      </p>
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}
