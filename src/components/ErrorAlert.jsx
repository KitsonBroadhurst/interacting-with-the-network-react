import React from "react";
import styled from "styled-components";

const ErrorAlertWrapper = styled.div`
  width: 100%;
  padding: 12px 24px;
  background: lightRed;
  colour: red;
`;

export const ErrorAlert = ({ message }) => {
  return (
    <ErrorAlertWrapper>
      <span>{message}</span>
    </ErrorAlertWrapper>
  );
};
