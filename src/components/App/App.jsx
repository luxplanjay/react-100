import PaymentList from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import css from "./App.module.css";
import Button from "../Button/Button";

export default function App() {
  return (
    <div className={css.container}>
      <PageTitle>Styling React Components</PageTitle>
      <Button variant="primary">First</Button>
      <Button variant="secondary" type="submit">
        Second
      </Button>
      <PaymentList payments={initialPayments} />
    </div>
  );
}

// const Panel = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

//  <Panel title="Рейтинг">
//         <div>First panel content</div>
//       </Panel>

//       <Panel title="Що це за очки досвіду та рівні?">
//         <p>Second panel content</p>
//       </Panel>

//       <Panel title="Як отримати більше очків досвіду?">
//         <button>Third panel content</button>
//       </Panel>
