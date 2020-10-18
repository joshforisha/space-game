import * as React from 'react'
import styled from 'styled-components'
import { ClockSlab } from '~/view/clock-slab'
import { Slab } from '~/view/slab'
import { Unit } from '~/view/unit'
import { useModel } from '~/view/model'
import { withCommas, withPrefix } from '~/lib/number'

const Panel = styled.div`
  display: flex;
  justify-content: space-evenly;

  & ${Slab} {
    background-color: rgba(248, 248, 248, 0.1);
    padding: 0px var(--medium);
    width: 20%;

    &:not(:first-child) {
      margin-left: 1px;
    }

    &:not(:last-child) {
      margin-right: 1px;
    }
  }
`

export function ResourcesPanel (): React.FC {
  const [model] = useModel()

  const [biomass, biomassPrefix] = withPrefix(model.biomass)
  const [credits, creditsPrefix] = withPrefix(model.credits)
  const [energy, energyPrefix] = withPrefix(model.energy)
  const [metal, metalPrefix] = withPrefix(model.metal)

  return (
    <Panel>
      <ClockSlab />
      <Slab label='Credits'>
        {withCommas(credits)}&thinsp;<Unit>{creditsPrefix}Cr</Unit>
      </Slab>
      <Slab label='Biomass'>
        {withCommas(biomass)}&thinsp;<Unit>{biomassPrefix}t</Unit>
      </Slab>
      <Slab label='Energy'>
        {withCommas(energy)}&thinsp;<Unit>{energyPrefix}W</Unit>
      </Slab>
      <Slab label='Metal'>
        {withCommas(metal)}&thinsp;<Unit>{metalPrefix}t</Unit>
      </Slab>
    </Panel>
  )
}
