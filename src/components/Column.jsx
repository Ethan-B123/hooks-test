import React, { useState } from "react";

function addPiece({ setBoard, board, idx, blueTurn, setBlueTurn }) {
  let color = blueTurn ? "blue" : "red";
  board = JSON.parse(JSON.stringify(board));
  return function() {
    for (let i = 0; i < board[idx].length; i++) {
      if (board[idx][i] !== null && i === 0) {
        break;
      }
      if (board[idx][i] !== null) {
        board[idx][i - 1] = color;
        break;
      }
      if (i === board[idx].length - 1) {
        board[idx][i] = color;
        break;
      }
    }
    // console.log(board);

    setBoard(board);
    setBlueTurn(!blueTurn);
  };
}

export default function(props) {
  const { column, setBoard, board, idx, color } = props;
  console.log(board);
  return (
    <div className="column" onClick={addPiece(props)}>
      {column.map(tile => {
        return <div className={"tile " + (tile ? tile : "")} />;
      })}
    </div>
  );
}
