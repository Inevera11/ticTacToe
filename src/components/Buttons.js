import React from "react";
import { ButtonsStyled, ButtonStyled } from "../styles/ButtonsStyles";
import { useContext } from "react";
import { gameStatsContext } from "../context/gameStatsContext";

const RefreshButton = () => {
  const {
    winner,
    setValues,
    setPlayer,
    setWinner,
    setCounterX,
    setCounterO,
    setMatchCounter,
    matchCounter,
  } = useContext(gameStatsContext);

  const onSwitchPlayers = () => {
    setValues(new Array(9).fill(null));
    setPlayer(matchCounter % 2 === 0 ? "X" : "O");
    setWinner(false);
    setValues(new Array(9).fill(null));
  };
  const onClear = () => {
    setValues(new Array(9).fill(null));
    setPlayer("X");
    setWinner(false);
    setCounterX(0);
    setCounterO(0);
    setMatchCounter(0);
  };
  return (
    <ButtonsStyled>
      <ButtonStyled onClick={onClear}> Start Over</ButtonStyled>
      {winner ? (
        <ButtonStyled onClick={onSwitchPlayers}>Rematch</ButtonStyled>
      ) : (
        ""
      )}
    </ButtonsStyled>
  );
};

export default RefreshButton;
