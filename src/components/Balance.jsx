import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </div>
  );
}
