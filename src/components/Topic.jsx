import React from "react";
import styled from "styled-components";

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  h2 {
    font-size: 20px;
  }
`;

export const Topic = ({ title, children }) => (
  <TopicWrapper>
    <h2>{title}</h2>
    {children}
  </TopicWrapper>
);
