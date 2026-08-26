import styled from "styled-components";

export const Article = styled.article`
  max-width: var(--textMaxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
`;

export const Subtitle = styled.h2`
  margin-top: -24px;
`;

export const Quote = styled.blockquote`
  font-size: 22px;
  text-align: center;
  line-height: 1.5em;
`;

export const Figure = styled.figure`
  margin: 24px 0 40px;
  padding: 0;
  aspect-ratio: 1.91 / 1;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Introduction = styled.p`
  font-style: italic;
`;

export const Question = styled.p`
  font-weight: 500;
  width: 100%;
  margin: 24px 0 16px;
`;

export const Answer = styled.p`
  width: 100%;
`;
