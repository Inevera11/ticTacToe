import React from "react";

const RefreshButton = ({ onClear }) => {
  return (
    <>
      <button onClick={onClear}> Play Again</button>
      <button>Remach</button>
    </>
  );
};

export default RefreshButton;
