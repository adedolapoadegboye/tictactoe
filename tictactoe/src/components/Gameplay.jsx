import React, { useState } from "react";

const Box = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="border-2 border-blue-500 w-100 w-20"
    >
      {value}
    </button>
  );
};

const Gameplay = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState("true");
  const [history, setHistory] = useState(squares);

  const X0r = () => {
    return isXNext ? "X" : "O";
  };

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    } else {
      const nextSquares = squares.slice();
      nextSquares[i] = X0r();
      setHistory(squares);
      setSquares(nextSquares);
      setisXNext(!isXNext);
    }
  }

  function handleUndo(k) {
    setSquares(history);

    if (X0r() === isXNext) {
      return;
    } else {
      setisXNext(!isXNext);
    }
  }

  function handleReset () {
    setSquares(Array(9).fill(null));
  }

  console.log(history);

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next Player is " + X0r();
  }

  return (
    <div>
      <div className="text-center my-10">
        <h1>
          TicTacToe Game by <span className="text-blue-600">Ade</span>
        </h1>
      </div>
      <div class="max-w-[200px] lg:max-w-[250px] h-40 lg:h-60 grid grid-rows-3 grid-flow-col gap-1 gap-x-0 justify-around justify-items-center text-center py-0 mx-auto my-0">
        <Box value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Box value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Box value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Box value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Box value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Box value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Box value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Box value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Box value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="flex justify-center gap-3 py-3">
        <button onClick={handleUndo} className="border-2 border-red-500">
          Undo last move
        </button>
        <button onClick={handleReset} className="border-2 border-green-500">
          Reset
        </button>
      </div>
      <div className="text-center py-1">{status}</div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  return (
    <div>
      <div>
        <Gameplay />
      </div>
      <div></div>
    </div>
  );
}
