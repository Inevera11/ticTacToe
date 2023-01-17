import React from "react";
import { Board } from "./components/Board";
import { HeaderStyled, Nothing, TitleStyled } from "./styles/GameStyles";
import RefreshButton from "./components/Buttons";
import { GameStatsContextProvider } from "./context/GameStatsContextProvider";
import CornerText from "./components/CornerText";
import MatchesPlayed from "./components/MatchesPlayed";
const Game = () => {
  return (
    <GameStatsContextProvider>
      <HeaderStyled>
        <Nothing>Matches Played:</Nothing>
        <TitleStyled>Tic tac toe game</TitleStyled>
        <MatchesPlayed />
      </HeaderStyled>
      <Board />
      <RefreshButton />
      <CornerText />
    </GameStatsContextProvider>
  );
};

export default Game;
