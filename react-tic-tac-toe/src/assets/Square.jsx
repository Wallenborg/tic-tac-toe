function Square({ value, onSquareClick }) {
  /* Using a ternary operator to choose the CSS class for 
  the button based on the value prop. 
  If value is "X," the class is set to 
  "square red"; otherwise, it's set to "square blue.*/
  const squareClass = value === "X" ? "square red" : "square blue";
  // Render a button representing a square, applying CSS class from squareClass
  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
