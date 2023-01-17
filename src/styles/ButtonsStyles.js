import styled from "styled-components";
import { Button } from "evergreen-ui";

export const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 3%;
  justify-content: space-evenly;
`;

export const ButtonStyled = styled(Button)`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #1a64d6;
  background: #113c7e;
  color: #e0ebef;
  font-size: 2em;
  line-height: 22px;
  padding: 2rem 3rem;
  border-radius: 40px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 3px 0px #8babe1;
  &:hover {
    color: #113c7e;
    border: 1px solid #0d2185;
    background-color: #e6ebfd;
    box-shadow: inset 0 0 8px 0px #4e5ce9;
  }
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 5vw;
  }
`;
