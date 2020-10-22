import * as React from 'react'
import styled from 'styled-components'
import { useModel } from '~/view/model'

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

export function SystemHeader () {
  const [{ currentSystem }] = useModel()

  return (
    <Header>
      <Name>{currentSystem.name}</Name>
    </Header>
  )
}
