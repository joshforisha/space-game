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

const Svg = styled.svg`
  height: ${svgSize}px;
  margin: var(--medium);
  width: ${svgSize}px;
`

export function ClusterMap () {
  const [{ currentSystem, starSystems }, dispatch] = useModel()

  const systemCircles = starSystems.map((system, i) =>
    <Circle
      current={system.id === currentSystem.id}
      key={system.id}
      onClick={() => dispatch(selectSystem(system.id))}
      r='19'
      cx={20 + (i % 3) * 76}
      cy={20 + (Math.floor(i / 3)) * 76}
    />
  )

  return (
    <Svg viewBox={`0 0 ${svgSize} ${svgSize}`}>
      {systemCircles}
    </Svg>
  )
}
