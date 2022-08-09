import React, { useState } from "react";
import { Board } from "./components/Board";
import styled from "styled-components";
import RefreshButton from "./components/Buttons";

// export default function Game() {
//     return <div>Hi! I am a game</div>
// }

// const Game = ({items, children}) => {
//     return (
//     <div>
//         <h2>Hi I am a game</h2>
//         <ul>
//             {items.map((item, i) => <li key={i}>{item}</li>)}
//         </ul>
//         <footer>{children}</footer>
//     </div>
//     )
// }

// const Game = () => {
//     const [clicks, setClicks] = useState(0)
//     return (
//         <div>
//             <p>{clicks}</p>
//             <button onClick={() => setClicks(prev => prev+1)}>+</button>
//         </div>
//     )
// }
const Button = styled.button`
  /* align-self: right; */
  margin: auto;
  border: 1px solid #1a64d6;
  background: #1a64d6;
  color: #e0ebef;
  font-size: 16px;
  line-height: 22px;
  padding: 16px 24px;
  border-radius: 30px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  box-shadow: -2px 2px 20px 2px #271f72;
  &:hover {
    background: #bbcef7e0;
    color: #14066d;
    border: 1px solid #1a64d6;
    box-shadow: inset 0 0 8px #091151;
  }
`;

const Nothing = styled.button`
  opacity: 0;
  margin: auto;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 22px;
`;

const HeaderStyled = styled.div`
  display: flex;
  flex-flow: row;
  font-family: "Poppins";
  justify-content: space-evenly;
`;
const TitleStyled = styled.h1`
  margin: auto;
  align-self: center;
  text-align: center;
  color: #cbb5e7de;
  font-size: 65px;
  text-shadow: -6px 2px 9px #c581f999;
  transition: ease-in-out 1s;
  &:hover {
    color: #df8282;
    text-shadow: 1px 1px 12px #c35a5ad1;
  }
`;

const Game = () => {
  const [values, setValues] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(false);
  const [player1, setPlayer1] = useState("Player X");
  const [player2, setPlayer2] = useState("Player O");
  const [counterX, setCounterX] = useState(0);
  const [counterO, setCounterO] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  return (
    <>
      <HeaderStyled>
        <Nothing>Matches Played:</Nothing>
        <TitleStyled>Tic tac toe game</TitleStyled>
        <Button>
          Matches Played:
          <div>{matchCounter}</div>
        </Button>
      </HeaderStyled>
      <Board
        values={values}
        setValues={setValues}
        player={player}
        setPlayer={setPlayer}
        winner={winner}
        setWinner={setWinner}
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
        counterO={counterO}
        setCounterO={setCounterO}
        counterX={counterX}
        setCounterX={setCounterX}
        matchCounter={matchCounter}
        setMatchCounter={setMatchCounter}
      />
      <RefreshButton
        winner={winner}
        onSwitchPlayers={() => {
          setValues(new Array(9).fill(null));
          setPlayer(matchCounter % 2 === 0 ? "X" : "O");
          setWinner(false);
          setValues(new Array(9).fill(null));
        }}
        onClear={() => {
          setValues(new Array(9).fill(null));
          setPlayer("X");
          setWinner(false);
          setCounterX(0);
          setCounterO(0);
          setMatchCounter(0);
        }}
      />
    </>
  );
};

export default Game;
