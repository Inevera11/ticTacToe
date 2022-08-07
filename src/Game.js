import React, { useState } from "react";
import { Board } from "./components/Board";
import styled from "styled-components";
import RefreshButton from "./components/RefreshButton";
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

const TitleStyled = styled.h1`
  text-align: center;
  margin-top: 40px;
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
  return (
    <>
      <TitleStyled>Tic tac toe game</TitleStyled>
      <Board values={values} setValues={setValues} />
      <RefreshButton onClear={() => setValues(new Array(9).fill(null))} />
    </>
  );
};

export default Game;
