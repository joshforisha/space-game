import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.8em;
  margin-bottom: var(--small);
  opacity: 0.6;
  text-transform: uppercase;
`

const Value = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1;
  margin-top: var(--small);
`

interface Props {
  children?: React.ReactNode;
  className?: string;
  label: string;
}

function _Slab ({ children, className, label }: Props) {
  return (
    <Container className={className}>
      <Value>{children}</Value>
      <Label>{label}</Label>
    </Container>
  )
}

export const Slab = styled(_Slab)``
