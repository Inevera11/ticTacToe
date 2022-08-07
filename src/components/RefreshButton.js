import { Button } from "evergreen-ui";
import React from "react";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin: 0.5rem;
  padding: 0.5rem;
`;

const RefreshButton = ({ onClear }) => {
  return (
    <>
      <ButtonStyled onClick={onClear}> Play Again</ButtonStyled>
      <ButtonStyled>Remach</ButtonStyled>
    </>
  );
};

export default RefreshButton;
