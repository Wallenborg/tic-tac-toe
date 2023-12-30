import { useState } from "react";

function Square({ value, onSquareClick }) {
  const squareClass = value === "X" ? "square red" : "square blue";
  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
