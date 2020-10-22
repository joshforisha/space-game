import * as React from 'react'
import styled from 'styled-components'
import { ClusterMap } from '~/view/cluster-map'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { SystemHeader } from '~/view/system-header'
import { SystemTable } from '~/view/system-table'
import { render } from 'react-dom'

const Maps = styled.div``

const SystemDetails = styled.div``

function Main () {
  return (
    <ModelProvider>
      <ResourcesPanel />
      <Maps>
        <ClusterMap />
      </Maps>
      <SystemDetails>
        <SystemHeader />
        <SystemTable />
      </SystemDetails>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
