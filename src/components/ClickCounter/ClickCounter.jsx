export default function ClickCounter({ value, onUpdate }) {
  return <button onClick={onUpdate}>Clicks: {value}</button>;
}
