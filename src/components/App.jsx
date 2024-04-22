import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import PaymentsPage from "../pages/PaymentsPage/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PaymentDetailsPage from "../pages/PaymentDetailsPage/PaymentDetailsPage";
import BankInfo from "./BankInfo";
import PaymentReceipt from "./PaymentReceipt";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="bank" element={<BankInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
