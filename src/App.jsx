import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./component/Board";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const handleClick = (i) => {
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setxIsNext(!xIsNext);
  };

  return (
    <>
      <div className="board-row">
        <Board value={square[0]} onSquareClick={() => handleClick(0)} />
        <Board value={square[1]} onSquareClick={() => handleClick(1)} />
        <Board value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Board value={square[3]} onSquareClick={() => handleClick(3)} />
        <Board value={square[4]} onSquareClick={() => handleClick(4)} />
        <Board value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Board value={square[6]} onSquareClick={() => handleClick(6)} />
        <Board value={square[7]} onSquareClick={() => handleClick(7)} />
        <Board value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
