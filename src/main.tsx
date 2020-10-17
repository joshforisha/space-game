import * as React from 'react'
import styled from 'styled-components'
import { Button } from '~/view/button'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { Slab, Unit } from '~/view/slab'
import { generateWorld } from '~/lib/world'
import { render } from 'react-dom'

const Name = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1;
  margin: var(--large) 0px 0px;
`

const Slabs = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > ${Slab} {
    margin-right: var(--large);
  }
`

const View = styled.div`
  margin: var(--large);
`

function Main () {
  const [world, setWorld] = React.useState(generateWorld('Test'))
  console.log(world)

  return (
    <ModelProvider>
      <ResourcesPanel />
      <View>
        <Name>{world.name}</Name>
        <Slabs>
          <Slab label='Size'>{world.size}</Slab>
          <Slab label='Atmosphere'>{world.atmosphere}</Slab>
          <Slab label='Gravity'>{world.gravity}</Slab>
          <Slab label='Temperature'>{world.temperature}</Slab>
        </Slabs>
        <Slabs>
          <Slab label='Hydration'>
            {world.hydration}
            <Unit>%</Unit>
          </Slab>
          <Slab label='Vegetation'>
            {world.vegetation}
            <Unit>%</Unit>
          </Slab>
          <Slab label='Biomass'>
            {world.biomass}&thinsp;<Unit>t/&#273;</Unit>
          </Slab>
          <Slab label='Metal'>
            {world.metal}&thinsp;<Unit>t/&#273;</Unit>
          </Slab>
        </Slabs>
        <Button onClick={() => setWorld(generateWorld('Test'))}>
          Generate
        </Button>
      </View>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
