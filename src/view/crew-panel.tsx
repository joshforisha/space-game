import * as React from 'react'
import styled from 'styled-components'
import { ClockSlab } from '~/view/clock-slab'
import { Slab } from '~/view/slab'
import { Unit } from '~/view/unit'
import { useModel } from '~/view/model'
import { withCommas } from '~/lib/number'

const Panel = styled.div`
  background-color: var(--dark-gray);
  grid-area: CrewPanel;
`

export function CrewPanel () {
  const [{ credits }] = useModel()

  return (
    <Panel>
      <ClockSlab />
      <Slab label='Credits'>
        {withCommas(credits)}&thinsp;<Unit>Cr</Unit>
      </Slab>
    </Panel>
  )
}
