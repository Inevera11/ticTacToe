import styled from "styled-components";

export const PlayersStyled = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  font-size: 2vw;
  color: #070123;
  transition: ease-in-out 0.4s;
  text-shadow: 0 0 2px #b4e0e3;
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 1.5em;
  }
`;
export const HighlightPlayer = styled.h2`
  text-shadow: ${({ active }) =>
    active
      ? "0px 0px 17px #eeddff, 0px 0px 19px #ad65f5,0 0 15px #b98ee3"
      : "0 0 2px #b4e0e3"};
`;
export const CounterStyled = styled.h2`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  font-size: 2vw;
  color: #070123;
  text-shadow: 0 0 2px #b4e0e3;
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 2em;
  }
`;
export const WinnerStyled = styled.h2`
  margin: 0 auto;
  grid-template-rows: 1fr;
  padding: 1em;
  text-align: center;
  font-size: 5em;
  font-weight: 600;
  color: #0c0c6abf;
  text-shadow: 0px 0px 19px #eeddff, 0px 0px 17px #ad65f5, 0px 0px 17px #c994fd,
    0px 0px 20px #ddbcff;
  @media (max-width: 900px) or (max-height: 800px) {
    font-size: 4em;
    margin: 0 1rem;
  }
`;
