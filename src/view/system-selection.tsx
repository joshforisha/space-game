import * as React from 'react'
import styled from 'styled-components'
import { ClusterMap } from '~/view/cluster-map'

const Container = styled.div`
  display: flex;
  grid-area: SystemSelection;
`

export function SystemSelection () {
  return (
    <Container>
      <ClusterMap />
    </Container>
  )
}
