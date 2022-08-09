import React, { useState } from "react";
import { CornerDialog, Button } from "evergreen-ui";

const CornerText = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <CornerDialog
        title="How to change player names"
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
      >
        Click on a player name directly and start typing your unique nickname
      </CornerDialog>
      <Button onClick={() => setIsShown(true)}>i</Button>
    </>
  );
};

export default CornerText;
