import * as React from 'react'
import styled from 'styled-components'
import { Kinded } from '~/lib/kinded'
import { plural } from '~/lib/string'
import { useModel } from '~/view/model'

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: var(--large);
`

const Details = styled.p`
  font-style: italic;
  margin-top: var(--tiny);
  opacity: 0.5;
`

const Name = styled.span`
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1;
`

export function SystemSummary () {
  const [{ currentSystem }] = useModel()

  const numStars = currentSystem.stars.length
  const starSystemType =
    numStars === 1
      ? 'Solitary'
      : numStars === 2
        ? 'Binary'
        : 'Trinary'

  const numPlanets = currentSystem.entities
    .filter(entity => (entity as Kinded).kind === 'World')
    .length

  return (
    <Container>
      <Name>{currentSystem.name}</Name>
      <Details>
        {starSystemType} star system,{' '}
        {plural(numPlanets, 'planet')}
      </Details>
    </Container>
  )
}
