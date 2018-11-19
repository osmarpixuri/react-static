import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
import styled from "styled-components";

const Contact = styled.div`
  text-align: center;
`;

export default withRouteData(({ contact }) => (
  <Contact>
    <Markdown source={contact.content} escapeHtml={false} />
  </Contact>
));
