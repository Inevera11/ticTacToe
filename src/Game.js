import React from "react";
import { Board } from "./components/Board";

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

const Game = () => {
  return (
    <h1>
      Tic tac toe game
      <Board />
    </h1>
  );
};

export default Game;
