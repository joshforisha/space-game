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

  &:hover {
    fill: var(--light-gray);
  }

  ${({ current }) => current && css`
    fill: var(--white);
  `}
`

const Svg = styled.svg`
  height: 200px;
  width: 200px;
`

export function ClusterMap () {
  const [{ currentSystem, starSystems }, dispatch] = useModel()

  function moveTo (index: number) {
    return () => dispatch(selectSystem(starSystems[index].id))
  }

  return (
    <Svg viewBox='0 0 400 400'>
      <Circle
        current={starSystems[0]?.id === currentSystem.id}
        onClick={moveTo(0)}
        cx='100' cy='100' r='20'
      />
      <Circle
        current={starSystems[1]?.id === currentSystem.id}
        onClick={moveTo(1)}
        cx='200' cy='100' r='20'
      />
      <Circle
        current={starSystems[2]?.id === currentSystem.id}
        onClick={moveTo(2)}
        cx='300' cy='100' r='20'
      />
      <Circle
        current={starSystems[3]?.id === currentSystem.id}
        onClick={moveTo(3)}
        cx='100' cy='200' r='20'
      />
      <Circle
        current={starSystems[4]?.id === currentSystem.id}
        onClick={moveTo(4)}
        cx='200' cy='200' r='20'
      />
      <Circle
        current={starSystems[5]?.id === currentSystem.id}
        onClick={moveTo(5)}
        cx='300' cy='200' r='20'
      />
      <Circle
        current={starSystems[6]?.id === currentSystem.id}
        onClick={moveTo(6)}
        cx='100' cy='300' r='20'
      />
      <Circle
        current={starSystems[7]?.id === currentSystem.id}
        onClick={moveTo(7)}
        cx='200' cy='300' r='20'
      />
      <Circle
        current={starSystems[8]?.id === currentSystem.id}
        onClick={moveTo(8)}
        cx='300' cy='300' r='20'
      />
    </Svg>
  )
}
