import React, { useRef } from "react";
import {
  PlayersStyled,
  CounterStyled,
  HighlightPlayer,
  WinnerStyled,
} from "../styles/PlayersStyles";
import { useContext } from "react";
import { gameStatsContext } from "../context/gameStatsContext";

const Players = () => {
  const {
    player,
    player1,
    player2,
    setPlayer1,
    setPlayer2,
    winner,
    counterX,
    counterO,
  } = useContext(gameStatsContext);
  const firstPlayerElement = useRef();
  const secondPlayerElement = useRef();

  const WhoWon = ({ player }) => {
    if (player === "X")
      return <WinnerStyled>The winner is {player1}</WinnerStyled>;
    if (player === "O")
      return <WinnerStyled>The winner is {player2}</WinnerStyled>;
    if (player === "no winner") return <WinnerStyled>Draw </WinnerStyled>;
  };
  return (
    <>
      {winner ? (
        <>
          <PlayersStyled>
            <h2>{player1}</h2>
            <h2>{player2}</h2>
          </PlayersStyled>
          <CounterStyled>
            <h2>{counterX}</h2>
            <h2>{counterO}</h2>
          </CounterStyled>
          <WhoWon player={player} />
        </>
      ) : (
        <>
          <PlayersStyled>
            <HighlightPlayer
              contentEditable
              ref={firstPlayerElement}
              onBlur={() =>
                setPlayer1(firstPlayerElement.current.innerText || "Player X")
              }
              active={player === "X"}
            >
              {player1}
            </HighlightPlayer>
            <HighlightPlayer
              contentEditable
              onBlur={() =>
                setPlayer2(secondPlayerElement.current.innerText || "Player O")
              }
              ref={secondPlayerElement}
              active={player === "O"}
            >
              {player2}
            </HighlightPlayer>
          </PlayersStyled>
          <CounterStyled>
            <h2>{counterX}</h2>
            <h2>{counterO}</h2>
          </CounterStyled>
        </>
      )}
    </>
  );
};

export default Players;
