import * as React from 'react'
import styled from 'styled-components'
import { ClusterMap } from '~/view/cluster-map'
import { SystemSummary } from '~/view/system-summary'

const Container = styled.div`
  display: flex;
  grid-area: SystemSelection;
  padding: var(--large);
`

export function SystemSelection () {
  return (
    <Container>
      <ClusterMap />
      <SystemSummary />
    </Container>
  )
}
