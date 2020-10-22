import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Pip = styled.div`
  background-color: ${({ active }) => active
    ? 'var(--white)'
    : 'transparent'};
  border: 1px solid ${({ active }) => active
    ? 'var(--white)'
    : 'var(--light-gray)'};
  border-radius: var(--small);
  height: var(--small);
  width: var(--small);

  &:not(:first-child) {
    margin-left: var(--tiny);
  }
`

interface Props {
  level: number;
}

export function Pips ({ level }: Props) {
  return (
    <Container>
      <Pip active={level > 0} />
      <Pip active={level > 1} />
      <Pip active={level > 2} />
      <Pip active={level > 3} />
      <Pip active={level > 4} />
    </Container>
  )
}
