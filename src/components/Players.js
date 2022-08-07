import React from "react";
import styled from "styled-components";

const PlayersStyled = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  font-size: initial;
  color: #070123; ;
`;
const HighlightPlayer = styled(PlayersStyled)`
  text-shadow: 0 0 7px #b98ee3;
`;
const Players = ({ player }) => {
  return (
    <PlayersStyled>
      {player === "X" ? (
        <>
          <HighlightPlayer>
            <h2>Player X</h2>
          </HighlightPlayer>
          <h2>Player O</h2>
        </>
      ) : (
        <>
          <h2>Player X</h2>
          <HighlightPlayer>
            <h2>Player O</h2>
          </HighlightPlayer>
        </>
      )}
    </PlayersStyled>
  );
};

export default Players;
