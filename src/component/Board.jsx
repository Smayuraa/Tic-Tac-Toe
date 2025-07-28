import { useState } from "react";

export default function Board({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // const handleClick = () => {
  //   setValue("x");
  // };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
