import * as React from 'react'
import styled, { css } from 'styled-components'
import { selectSystem } from '~/lib/actions'
import { useModel } from '~/view/model'

const Circle = styled.circle`
  cursor: pointer;
  fill: var(--dark-gray);
  stroke: var(--light-gray);
  stroke-width: 1px;
  transition: fill 100ms ease-out;

  ${({ current }) => !current && css`
    &:hover {
      fill: var(--light-gray);
    }
  `}

  ${({ current }) => current && css`
    fill: var(--white);
  `}
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const SystemName = styled.span`
  font-size: 1.6rem;
`

const Svg = styled.svg`
  height: 200px;
  width: 200px;
`

export function ClusterMap () {
  const [{ currentSystem, starSystems }, dispatch] = useModel()
  const [displayName, setDisplayName] = React.useState(currentSystem.name)

  const systemCircles = starSystems.map((system, i) =>
    <Circle
      current={system.id === currentSystem.id}
      key={system.id}
      onClick={() => dispatch(selectSystem(system.id))}
      onMouseOver={() => setDisplayName(system.name)}
      onMouseOut={() => setDisplayName(currentSystem.name)}
      r='32'
      cx={((i % 3) + 1) * 100}
      cy={(Math.floor(i / 3) + 1) * 100}
    />
  )

  return (
    <Container>
      <Svg viewBox='0 0 400 400'>
        {systemCircles}
      </Svg>
      <SystemName>{displayName}</SystemName>
    </Container>
  )
}
