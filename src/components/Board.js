import React, { useEffect } from "react";
import { Square } from "./Square";
import isWinner from "./isWinner";
import Players from "./Players";

export const Board = ({
  player1,
  setPlayer1,
  player2,
  setPlayer2,
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
}) => {
  useEffect(() => {
    if (isWinner(values)) {
      setPlayer(player === "X" ? "O" : "X");
      setCounterX(player === "O" ? counterX + 1 : counterX);
      setCounterO(player === "X" ? counterO + 1 : counterO);
      setMatchCounter(matchCounter + 1);
      setWinner(true);
    }
    if (!values.includes(null) && !winner) {
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
    <React.Fragment>
      {winner ? (
        <Players
          player={player}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          winner={winner}
          counterO={counterO}
          counterX={counterX}
        />
      ) : (
        <>
          <Players
            player={player}
            player1={player1}
            setPlayer1={setPlayer1}
            player2={player2}
            setPlayer2={setPlayer2}
            winner={winner}
            counterO={counterO}
            counterX={counterX}
          />
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
