import { ToggleButton as RACToggleButton } from "react-aria-components/ToggleButton";

import styled from "styled-components";

export const ToggleButton = styled(RACToggleButton)`
  border: 1px solid var(--border);
  margin-left: -1px;
  background: var(--headerBg);
  color: var(--text);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0px;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    margin-left: 0;
  }
  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: 1px solid var(--border);
  }
  &:hover {
    background-color: var(--accent-dark);
    color: var(--accent-contrast);
    border-color: var(--accent-dark);
  }
  &[data-selected="true"] {
    background-color: var(--accent-dark);
    color: var(--accent-contrast);
    border-color: var(--accent-dark);
  }
`;
