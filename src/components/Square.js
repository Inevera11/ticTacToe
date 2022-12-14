import React from "react";
import styled from "styled-components";

// export const Square = (props) => {
//   return (
//     <button>{props.value}</button>
//   )
// }

const ButtonStyled = styled.button`
  background-color: #cddbf3fa;
  border: 1px solid #999;
  font-size: 65px;
  font-weight: bold;
  transition: all 0.3s;
  color: #19181ae8;

  &:hover {
    background-color: #97c1d1;
  }
`;

// const evenMoreButtonStyled = styled(ButtonStyled)` dziedzic
// `

const styles = {
  background: "#fff",
  border: "1px solid #999",
  fontSize: "70px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "100px",
  marginRight: "-5px",
  marginTop: "-5px",
  padding: 0,
  textAlign: "center",
  width: "100px",
};

export const Square = ({ value, setValue }) => {
  return <ButtonStyled onClick={() => setValue()}>{value}</ButtonStyled>;
};
