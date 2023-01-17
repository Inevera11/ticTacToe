import styled from "styled-components";
import { Button } from "evergreen-ui";

export const ButtonStyled = styled(Button)`
  margin: 5%;
  float: right;
  position: fixed;
  right: 0;
  bottom: 0;
  line-height: 22px;
  font-style: italic;
  font-weight: bolder;
  font-size: 2em;
  font-family: initial;
  border-radius: 37px;
  padding: 1.5rem;
  border: 1px solid #8f95b2;
  background-color: #fafbffc4;
  &:hover {
    box-shadow: 0 0 11px 4px #e3edece6;
  }
`;
