import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";

import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;

  h3 {
    text-align: center;
  }

  img {
    flex: 0 0 33.33%;
    position: relative;
    max-height: 250px;
  }

  p {
    font-family: "Times New Roman", Times, serif;
    flex: 0 0 66.66%;
    position: relative;
    margin-left: 1rem;
  }
`;

export default withRouteData(({ about }) => (
  <Article>
    <img src={about.data.thumbnail} alt="pudim" />
    <Markdown source={about.content} escapeHtml={false} />
  </Article>
));
