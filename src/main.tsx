import * as React from 'react'
import styled from 'styled-components'
import { CrewPanel } from '~/view/crew-panel'
import { ModelProvider } from '~/view/model'
import { SystemSelection } from '~/view/system-selection'
import { WorldSelection } from '~/view/world-selection'
import { render } from 'react-dom'

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "CrewPanel SystemSelection"
    "CrewPanel WorldSelection";
  grid-template-columns: 265px auto;
  grid-template-rows: calc(192px + 2 * var(--large)) auto;
  height: 100vh;
  width: 100%;
`

function Main () {
  return (
    <ModelProvider>
      <MainContainer>
        <CrewPanel />
        <SystemSelection />
        <WorldSelection />
      </MainContainer>
    </ModelProvider>
  )
}

render(<Main />, document.getElementById('Root'))
