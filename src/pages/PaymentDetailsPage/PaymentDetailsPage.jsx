import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getPaymentById } from "../../payments-api";
import PaymentInfo from "../../components/PaymentInfo";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/payments");

  useEffect(() => {
    async function fetchPayment() {
      try {
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {}
    }
    fetchPayment();
  }, [paymentId]);

  return (
    <div>
      <p>
        <b>PaymentDetailsPage</b>
      </p>

      <div>
        <Link to={backLinkURLRef.current}>Go back</Link>
      </div>

      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>

      <Suspense fallback={<b>Loading nested route...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
