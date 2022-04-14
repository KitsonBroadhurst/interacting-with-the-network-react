import React from "react";
import styled from "styled-components";

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 150px;
  padding: 50px 24px;
  h2 {
    font-size: 20px;
  }
  ol {
    margin-left: 50px;
    line-height: 2.5;
  }
  li {
    text-align: left;
    font-size: 14px;
  }
  button {
    margin: 0 16px;
  }
`;

export const Topic = ({ title, children }) => (
  <TopicWrapper>
    <h2>{title}</h2>
    {children}
  </TopicWrapper>
);
