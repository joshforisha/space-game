import * as React from 'react'
import { ClusterMap } from '~/view/cluster-map'
import { ModelProvider } from '~/view/model'
import { ResourcesPanel } from '~/view/resources-panel'
import { SystemTable } from '~/view/system-table'
import { render } from 'react-dom'

function Main () {
  return (
    <ModelProvider>
      <ResourcesPanel />
      <ClusterMap />
      <SystemTable />
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
