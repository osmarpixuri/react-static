import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PudimImg = styled.img`
  align-self: center;
  max-width: 200px;
  border-radius: 50%;
`;

const PudimLabel = styled(Markdown)`
  color: red;
  text-align: center;
  font-size: 2rem;
`;

export default withRouteData(({ home }) => (
  <Content>
    <PudimImg src={home.data.thumbnail} alt="pudim" />
    <PudimLabel source={home.content} escapeHtml={false} />
  </Content>
));
