import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import isWinner from "./isWinner";
import Players from "./Players";

export const Board = ({
  values,
  setValues,
  player,
  setPlayer,
  winner,
  setWinner,
}) => {
  useEffect(() => {
    if (isWinner(values)) {
      setWinner(true);
      setPlayer(player === "X" ? "O" : "X");
    }
    if (!values.includes(null) && !winner) {
      setWinner(true);
      setPlayer("yet to come");
    }
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
        <>
          <Players player={player} />
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
        </>
      )}
    </React.Fragment>
  );
};
