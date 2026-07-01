import styled from "styled-components";

export const Loader = styled.span`
  --color-1: var(--text);
  --color-2: var(--accent);
  --size: 1px;

  width: calc(48 * var(--size));
  height: calc(48 * var(--size));
  border-radius: 50%;
  display: inline-block;
  border-top: calc(4 * var(--size)) solid var(--color-1);
  border-right: calc(4 * var(--size)) solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(48 * var(--size));
    height: calc(48 * var(--size));
    border-radius: 50%;
    border-bottom: calc(4 * var(--size)) solid var(--color-2);
    border-left: calc(4 * var(--size)) solid transparent;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
