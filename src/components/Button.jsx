import styled from "styled-components";

export const Button = styled.button`
  font-size: 12px;
  background-color: #61dafb;
  color: #000000;
  padding: 4px 8px;
  text-decoration: none;
  border: 0;
  cursor: pointer;

  &:disabled {
    background: lightGrey;
    color: black;
    ursor: not-allowed;
  }
`;
