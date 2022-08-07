import React, { useState, useRef } from "react";
import styled from "styled-components";

const PlayersStyled = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: x-large;
  color: #070123; ;
`;
const HighlightPlayer = styled.h2`
  text-shadow: ${(props) => (props.active ? "0 0 7px #b98ee3" : "none")};
`;
const Players = ({ player }) => {
  const [player1, setPlayer1] = useState("Player X");
  const [player2, setPlayer2] = useState("Player O");
  const firstPlayerElement = useRef();
  const secondPlayerElement = useRef();
  return (
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
  );
};

export default Players;
