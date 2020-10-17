import * as React from 'react'
import styled from 'styled-components'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { Unit } from '~/view/unit'
import { Table } from '~/view/table'
import { generateWorld } from '~/lib/world'
import { initialize } from '~/lib/array'
import { render } from 'react-dom'

const View = styled.div`
  margin: var(--large);
`

function Main () {
  const [worlds] = React.useState(initialize(8, i => generateWorld(`World ${i}`)))

  return (
    <ModelProvider>
      <ResourcesPanel />
      <View>
        <Table
          columns={{
            Planet: { view: ({ name }) => name },
            Size: { view: ({ size }) => size },
            Atmosphere: { view: ({ atmosphere }) => atmosphere },
            Gravity: { view: ({ gravity }) => gravity },
            Temperature: { view: ({ temperature }) => temperature },
            Hydration: { align: 'right', view: ({ hydration }) => <>{hydration}<Unit>%</Unit></> },
            Vegetation: { align: 'right', view: ({ vegetation }) => <>{vegetation}<Unit>%</Unit></> },
            Biomass: { align: 'right', view: ({ biomass }) => <>{biomass}&thinsp;<Unit>t/&#273;</Unit></> },
            Metal: { align: 'right', view: ({ metal }) => <>{metal}&thinsp;<Unit>t/&#273;</Unit></> }
          }} data={worlds}
        />
      </View>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
