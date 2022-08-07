import React from "react";

const PlayerId = () => {
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
        <input type="text" placeholder=" " />
      </div>
      <div>
        <label>Player O</label>
        <input type="text" placeholder=" " />
      </div>
    </form>
  );
};

export default PlayerId;
