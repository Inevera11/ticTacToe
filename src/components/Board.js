import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import isWinner from "./isWinner";

export const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (isWinner(values))
      return [setWinner(true), setPlayer(player === "X" ? "O" : "X")];
    if (!values.includes(null) && !winner)
      return [setWinner(true), setPlayer("yet to come")];
  }, [values]);

  const changeSquare = (id) => {
    if (values[id] !== null) return;

    const newArr = values.map((item, idx) => {
      if (id === idx) return player;
      return item;
    });
    setPlayer(player === "X" ? "O" : "X");
    setValues(newArr);
  };

  return (
    <React.Fragment>
      {winner ? (
        <h2 className="result"> The winner is {player} </h2>
      ) : (
        <div className="squares">
          {values.map((item, id) => (
            <Square
              key={id}
              value={item}
              setValue={() => {
                changeSquare(id);
              }}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};
