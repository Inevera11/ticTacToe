import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: #cddbf3fa;
  border: 1px solid #999;
  font-size: 6em;
  font-weight: bold;
  transition: all 0.3s;
  color: #19181ae8;

  &:hover {
    background-color: #97c1d1;
  }
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 4em;
  }
`;
