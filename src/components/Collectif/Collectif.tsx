import styled from "styled-components";
import type { CollectifI } from "../../data/collectifs";
import { CollectifContent } from "./CollectifContent";

const Container = styled.div`
  flex: 1 1 220px;
  background-color: var(--bg);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
`;

interface Props {
  collectif: CollectifI;
}

export function Collectif({ collectif }: Props) {
  return (
    <Container>
      <CollectifContent collectif={collectif} />
    </Container>
  );
}
