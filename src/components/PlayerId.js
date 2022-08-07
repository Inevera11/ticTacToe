import React, { useState } from "react";

const PlayerId = () => {
  const [textX, setTextX] = useState("");
  const [textO, setTextO] = useState("");
  const text = "blablabla";
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Name must be a text");
    }
    return;
  };
  return (
    <form className="addForm" onSubmit={onSubmit}>
      <div>
        <label>Player X</label>
        <input
          type="text"
          placeholder="X name "
          value={textX}
          onChange={(e) => setTextX(e.target.value)}
        />
      </div>
      <div>
        <label>Player O</label>
        <input
          type="text"
          placeholder="O name "
          value={textO}
          onChange={(e) => setTextO(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Players" className="btn btn-block" />
    </form>
  );
};

export default PlayerId;
