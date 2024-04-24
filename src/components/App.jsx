import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
// import BankInfo from "./BankInfo";
// import PaymentReceipt from "./PaymentReceipt";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PaymentsPage = lazy(() => import("../pages/PaymentsPage/PaymentsPage"));
const PaymentDetailsPage = lazy(() =>
  import("../pages/PaymentDetailsPage/PaymentDetailsPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const BankInfo = lazy(() => import("./BankInfo"));
const PaymentReceipt = lazy(() => import("./PaymentReceipt"));

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
