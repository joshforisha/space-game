import * as React from 'react'
import styled from 'styled-components'
import { Button } from '~/view/button'

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: var(--medium) 0px;
`

const Name = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 2rem;
  justify-content: center;
  flex: 1;
`

interface Props {
  onNext?: () => void;
  onPrevious?: () => void;
  systemName: string;
}

export function SystemHeader ({ onNext, onPrevious, systemName }: Props) {
  return (
    <Header>
      <Button onClick={onPrevious}>&lang;&ensp;Prev</Button>
      <Name>{systemName}</Name>
      <Button onClick={onNext}>Next&ensp;&rang;</Button>
    </Header>
  )
}
