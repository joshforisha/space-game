import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: var(--medium);
`;

const Label = styled.label`
  display: block;
  font-size: 0.8em;
  opacity: 0.6;
  text-transform: uppercase;
`;

const Value = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1;
  margin-top: var(--medium);
`;

interface Props {
  children?: React.ReactNode;
  label: string;
}

export function Slab({ children, label }: Props): React.FC {
  return (
    <Container>
      <Value>{children}</Value>
      <Label>{label}</Label>
    </Container>
  );
}
