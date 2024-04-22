import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Opps! Page not found! Sorry!</p>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}
