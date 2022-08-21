import React, { useState } from "react";
import { CornerDialog, Button } from "evergreen-ui";
import styled from "styled-components";

const CornerText = () => {
  const [isShown, setIsShown] = useState(false);
  const ButtonStyled = styled(Button)`
    margin: 5%;
    float: right;
    line-height: 22px;
    font-style: italic;
    font-weight: bolder;
    font-size: inherit;
    font-family: initial;
    border-radius: 37px;
    padding: 15px;
    border: 1px solid #8f95b2;
    background-color: #fafbffc4;
    &:hover {
      box-shadow: 0 0 11px 4px #e3edece6;
    }
  `;
  return (
    <>
      <CornerDialog
        hasCancel={false}
        title="How to change player names"
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Understood"
      >
        Click on a player name directly and start typing your unique nickname
      </CornerDialog>
      <ButtonStyled onClick={() => setIsShown(true)}>i</ButtonStyled>
    </>
  );
};

export default CornerText;
