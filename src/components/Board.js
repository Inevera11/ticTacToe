import React, { useEffect, useContext } from "react";
import { Square } from "./Square";
import isWinner from "./isWinner";
import Players from "./Players";
import { BoardStyled } from "../styles/BoardStyles";
import { gameStatsContext } from "../context/gameStatsContext";

export const Board = () => {
  const {
    values,
    setValues,
    player,
    setPlayer,
    winner,
    setWinner,
    counterO,
    setCounterO,
    counterX,
    setCounterX,
    matchCounter,
    setMatchCounter,
  } = useContext(gameStatsContext);

  useEffect(() => {
    if (isWinner(values)) {
      setPlayer(player === "X" ? "O" : "X");
      setCounterX(player === "O" ? counterX + 1 : counterX);
      setCounterO(player === "X" ? counterO + 1 : counterO);
      setMatchCounter(matchCounter + 1);
      setWinner(true);
    }
    if (!values.includes(null) && isWinner(values) === false) {
      setPlayer("no winner");
      setWinner(true);
      setMatchCounter(matchCounter + 1);
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
    <BoardStyled>
      {winner ? (
        <Players />
      ) : (
        <>
          <Players />
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
    </BoardStyled>
  );
};
