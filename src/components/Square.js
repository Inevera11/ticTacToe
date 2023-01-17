import React from "react";
import { ButtonStyled } from "../styles/SquareStyles";

export const Square = ({ value, setValue }) => {
  return <ButtonStyled onClick={() => setValue()}>{value}</ButtonStyled>;
};
