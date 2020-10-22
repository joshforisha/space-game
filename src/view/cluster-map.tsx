import * as React from 'react'
import styled, { css } from 'styled-components'
import { selectSystem } from '~/lib/actions'
import { useModel } from '~/view/model'

const svgSize = 192

const Circle = styled.circle`
  cursor: pointer;
  fill: var(--dark-gray);
  stroke: var(--light-gray);
  stroke-width: 1px;
  transition: fill 100ms ease-out, stroke 100ms ease-out;

  ${({ current }) => !current && css`
    &:hover {
      fill: var(--light-gray);
    }
  `}

  ${({ current }) => current && css`
    fill: var(--white);
    stroke: var(--white);
  `}
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: var(--medium);
`

const SystemName = styled.span`
  font-size: 1.6rem;
  line-height: 1;
  margin-top: var(--medium);
`

const Svg = styled.svg`
  height: ${svgSize}px;
  width: ${svgSize}px;
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
      r='19'
      cx={20 + (i % 3) * 76}
      cy={20 + (Math.floor(i / 3)) * 76}
    />
  )

  return (
    <Container>
      <Svg viewBox={`0 0 ${svgSize} ${svgSize}`}>
        {systemCircles}
      </Svg>
      <SystemName>{displayName}</SystemName>
    </Container>
  )
}
