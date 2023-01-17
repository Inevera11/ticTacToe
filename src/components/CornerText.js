import React, { useState } from "react";
import { CornerDialog } from "evergreen-ui";
import { ButtonStyled } from "../styles/CornerTextStyles";

const CornerText = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <CornerDialog
        hasFooter={false}
        width={800}
        title={
          <div style={{ fontSize: "2vw" }}>How to change player names</div>
        }
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Understood"
      >
        <div style={{ fontSize: "1.5vw" }}>
          Click on a player name directly and start typing your unique nickname
        </div>
      </CornerDialog>
      <ButtonStyled onClick={() => setIsShown(true)}>i</ButtonStyled>
    </>
  );
};

export default CornerText;
