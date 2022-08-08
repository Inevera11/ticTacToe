import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "evergreen-ui";

const PlayersStyled = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: x-large;
  color: #070123;
  transition: ease-in-out 0.4s;
  text-shadow: 0 0 2px #b4e0e3;
`;
const HighlightPlayer = styled.h2`
  text-shadow: ${(props) =>
    props.active
      ? "0px 0px 17px #eeddff, 0px 0px 19px #ad65f5,0 0 15px #b98ee3"
      : "0 0 2px #b4e0e3"};
`;
const CounterStyled = styled.h2`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: x-large;
  color: #070123;
  text-shadow: 0 0 2px #b4e0e3;
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
    margin: 0 auto;
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
    if (player === "no winner") return <WinnerStyled>Draw</WinnerStyled>;
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
