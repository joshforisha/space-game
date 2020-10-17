import * as React from 'react'
import styled from 'styled-components'
import { Slab } from '~/view/slab'
import { leftPad } from '~/lib/string'

const Secs = styled.span`
  font-size: 0.8em;

  &:before {
    content: ".";
  }
`

export function ClockSlab (): React.FC {
  const [mhours, setMHours] = React.useState()
  const [msecs, setMSecs] = React.useState()

  React.useEffect(() => {
    function tick () {
      const now = Date.now()
      setMHours(leftPad(Math.floor((now % 1e8) / 1e5).toString(), 3, '0'))
      setMSecs(leftPad(Math.floor((now % 1e5) / 1000).toString(), 2, '0'))
      setTimeout(tick, 1000 - (now % 1000))
    }
    tick()
  }, [])

  return (
    <Slab label='Time'>
      {mhours}
      <Secs>{msecs}</Secs>
    </Slab>
  )
}
