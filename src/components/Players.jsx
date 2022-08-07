import React, { useState, useRef } from "react";
import styled from "styled-components";

const PlayersStyled = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: x-large;
  color: #070123;
  transition: ease-in-out 0.4s;
`;
const HighlightPlayer = styled.h2`
  text-shadow: ${(props) => (props.active ? "0 0 7px #b98ee3" : "none")};
`;
const CounterStyled = styled.h2`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: x-large;
  color: #070123;
`;

const Players = ({
  player,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  winner,
  counterX,
  counterO,
}) => {
  const firstPlayerElement = useRef();
  const secondPlayerElement = useRef();

  const WinnerStyled = styled.h2`
    margin: auto;
    grid-template-rows: 1fr;
    padding: 1em;
    text-align: center;
    font-size: 70px;
    font-weight: 600;
    color: #0c0c6abf;
    text-shadow: 0px 0px 19px #eeddff, 0px 0px 17px #ad65f5,
      0px 0px 17px #c994fd, 0px 0px 20px #ddbcff;
  `;

  const WhoWon = ({ player }) => {
    if (player === "X")
      return <WinnerStyled>The winner is {player1}</WinnerStyled>;
    if (player === "O")
      return <WinnerStyled>The winner is {player2}</WinnerStyled>;
    if (player === "no winner")
      return <WinnerStyled>"This match was equal"</WinnerStyled>;
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
