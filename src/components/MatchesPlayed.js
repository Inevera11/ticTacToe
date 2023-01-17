import React from "react";
import { Button } from "../styles/GameStyles";
import { useContext } from "react";
import { gameStatsContext } from "../context/gameStatsContext";

const MatchesPlayed = () => {
  const { matchCounter } = useContext(gameStatsContext);
  return (
    <Button>
      Matches Played:
      <div>{matchCounter}</div>
    </Button>
  );
};

export default MatchesPlayed;
