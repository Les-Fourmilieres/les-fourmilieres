import styled from "styled-components";
import { Text } from "react-aria-components/TextField";

export const Description = styled(Text)`
  display: block;
  font: var(--sans) system-ui;
  margin-top: 8px;
  contain: inline-size;

  [data-invalid] > & {
    display: none;
  }
`;
