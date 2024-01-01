import "./rules.css";

function Rules() {
  return (
    <div className="container-rules">
      <h1 className="title">Rules for Tic-Tac-Toe</h1>
      <p className="rules-text">
        The game is played on a grid that's 3 squares by 3 squares.
      </p>
      <p className="rules-text">
        Player one are X , Player two is O . Players take turns putting their
        marks in empty squares.
      </p>
      <p className="rules-text">
        The first player to get 3 of her marks in a row (up, down, across, or
        diagonally) is the winner.
      </p>
      <p className="rules-text">
        When all 9 squares are full, the game is over. If no player has 3 marks
        in a row, the game ends in a tie.
      </p>
    </div>
  );
}

export default Rules;
