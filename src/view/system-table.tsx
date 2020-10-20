import * as React from 'react'
import { StarSystem } from '~/lib/star-system'
import { Table, keyed } from '~/view/table'

interface Props {
  system: StarSystem;
}

export function SystemTable ({ system }: Props) {
  return (
    <Table
      columns={{
        Entity: { view: keyed('name') },
        Type: { view: keyed('type') }
      }}
      data={system.entities}
    />
  )
}
