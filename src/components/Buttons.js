import { Button } from "evergreen-ui";
import React from "react";
import styled from "styled-components";

const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 3%;
  justify-content: space-evenly;
`;

const ButtonStyled = styled(Button)`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #1a64d6;
  background: #113c7e;
  color: #e0ebef;
  font-size: 16px;
  line-height: 22px;
  padding: 18px 24px;
  border-radius: 30px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 3px 0px #8babe1;
  &:hover {
    color: #113c7e;
    border: 1px solid #0d2185;
    background-color: #e6ebfd;
    box-shadow: inset 0 0 8px 0px #4e5ce9;
  }
`;

const RefreshButton = ({ onClear, onSwitchPlayers, winner }) => {
  return (
    <ButtonsStyled>
      <ButtonStyled onClick={onClear}> Start Over</ButtonStyled>
      {winner ? (
        <ButtonStyled onClick={onSwitchPlayers}>Rematch</ButtonStyled>
      ) : (
        ""
      )}
    </ButtonsStyled>
  );
};

export default RefreshButton;
