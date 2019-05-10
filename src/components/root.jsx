import React, { useState } from "react";
import Column from "./Column";
import "./main.css";

const xDim = 7;
const yDim = 6;

const initBoard = [];
for (let x = 0; x < xDim; x++) {
  initBoard.push([]);
  for (let y = 0; y < yDim; y++) {
    initBoard[x].push(null);
  }
}

export default function(props) {
  const [board, setBoard] = useState(initBoard);
  const [blueTurn, setBlueTurn] = useState(true);
  return (
    <div className="board">
      {board.map((column, idx) => {
        return (
          <Column
            {...{ idx, column, setBoard, board, blueTurn, setBlueTurn }}
          />
        );
      })}
    </div>
  );
}
