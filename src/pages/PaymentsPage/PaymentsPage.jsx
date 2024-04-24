import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaymentList from "../../components/PaymentList/PaymentList";
import OwnerFilter from "../../components/OwnerFilter";
import { getPayments } from "../../payments-api";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerParam = searchParams.get("owner") ?? "";

  const changeOwnerFilter = (newFilter) => {
    searchParams.set("owner", newFilter);
    setSearchParams(searchParams);
  };

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

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerParam.toLowerCase())
    );
  }, [ownerParam, payments]);

  return (
    <div>
      <p>
        <b>PaymentsPage</b>
      </p>
      <OwnerFilter value={ownerParam} onFilter={changeOwnerFilter} />
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
    </div>
  );
}
