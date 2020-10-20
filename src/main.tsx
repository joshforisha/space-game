import * as React from 'react'
import styled from 'styled-components'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { SystemHeader } from '~/view/system-header'
import { SystemTable } from '~/view/system-table'
import { generateStarSystem } from '~/lib/star-system'
import { render } from 'react-dom'

const View = styled.div``

function Main () {
  const [currentSystem] = React
    .useState(generateStarSystem())

  return (
    <ModelProvider>
      <ResourcesPanel />
      <View>
        <SystemHeader systemName={currentSystem.name} />
        <SystemTable system={currentSystem} />
      </View>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
