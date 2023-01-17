import { useState } from "react";
import { gameStatsContext } from "./gameStatsContext";

export const GameStatsContextProvider = ({ children }) => {
  const [values, setValues] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(false);
  const [player1, setPlayer1] = useState("Player X");
  const [player2, setPlayer2] = useState("Player O");
  const [counterX, setCounterX] = useState(0);
  const [counterO, setCounterO] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);

  return (
    <gameStatsContext.Provider
      value={{
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
      }}
    >
      {children}
    </gameStatsContext.Provider>
  );
};
