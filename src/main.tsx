import * as React from 'react'
import styled from 'styled-components'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { Table, keyed } from '~/view/table'
import { Unit } from '~/view/unit'
import { generateWorld } from '~/lib/world'
import { initialize } from '~/lib/array'
import { render } from 'react-dom'

const View = styled.div`
  margin: var(--medium) 0px;
`

function Main () {
  const [worlds] = React
    .useState(initialize(8, i => generateWorld(`World ${i}`)))

  return (
    <ModelProvider>
      <ResourcesPanel />
      <View>
        <Table
          columns={{
            Planet: { view: keyed('name') },
            Size: { view: keyed('size') },
            Atmosphere: { view: keyed('atmosphere') },
            Gravity: { view: keyed('gravity') },
            Temperature: { view: keyed('temperature') },
            Hydration: {
              align: 'right',
              view: ({ hydration }) => <>{hydration}<Unit>%</Unit></>
            },
            Vegetation: {
              align: 'right',
              view: ({ vegetation }) => <>{vegetation}<Unit>%</Unit></>
            },
            Biomass: {
              align: 'right',
              view: ({ biomass }) => <>{biomass}&thinsp;<Unit>t/&#273;</Unit></>
            },
            Metal: {
              align: 'right',
              view: ({ metal }) => <>{metal}&thinsp;<Unit>t/&#273;</Unit></>
            }
          }}
          data={worlds}
        />
      </View>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
