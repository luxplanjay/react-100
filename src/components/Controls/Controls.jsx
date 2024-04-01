export default function Controls({ isFirst, isLast, onPrev, onNext }) {
  return (
    <div>
      <button onClick={onPrev} disabled={isFirst}>
        Prev
      </button>
      <button onClick={onNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
}
