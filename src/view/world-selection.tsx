import * as React from 'react'
import styled from 'styled-components'
import { SystemTable } from '~/view/system-table'

const Container = styled.div`
  grid-area: WorldSelection;
  overflow-y: scroll;
`

export function WorldSelection () {
  return (
    <Container>
      <SystemTable />
    </Container>
  )
}
