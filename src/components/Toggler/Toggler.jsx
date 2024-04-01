import { useState } from "react";

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id
          labore repudiandae suscipit accusamus nisi commodi perferendis
          consectetur voluptates libero excepturi architecto enim, saepe, quae
          nobis assumenda sed! Suscipit, ipsam.
        </p>
      )}
    </div>
  );
}
