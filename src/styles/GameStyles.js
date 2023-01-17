import styled from "styled-components";

export const Button = styled.button`
  margin: auto;
  border: 1px solid #1a64d6;
  background: #1a64d6;
  color: #e0ebef;
  font-size: 1.5em;
  /* line-height: 22px; */
  padding: 1rem 2rem;
  border-radius: 30px;
  transition: ease-in-out 0.3s;
  box-shadow: -2px 2px 20px 2px #271f72;
  &:hover {
    background: #bbcef7e0;
    color: #14066d;
    border: 1px solid #1a64d6;
    box-shadow: inset 0 0 8px #091151;
  }
`;

export const Nothing = styled.button`
  opacity: 0;
  margin: auto;
  padding: 1rem 2rem;
  font-size: 16px;
  line-height: 22px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-flow: row;
  font-family: "Poppins";
  justify-content: space-evenly;
`;
export const TitleStyled = styled.h1`
  margin: auto;
  align-self: center;
  text-align: center;
  color: #cbb5e7de;
  font-size: 5em;
  text-shadow: -6px 2px 9px #c581f999;
  transition: ease-in-out 1s;
  &:hover {
    color: #df8282;
    text-shadow: 1px 1px 12px #c35a5ad1;
  }
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 2em;
  }
`;
