import * as React from 'react'
import styled from 'styled-components'
import { StarSystem } from '~/lib/star-system'
import { Table, keyed } from '~/view/table'

const SubEntity = styled.span`
  display: block;
  margin-left: var(--small);

  &::before {
    content: "›";
    margin-right: var(--small);
    opacity: 0.5;
  }
`

interface Props {
  system: StarSystem;
}

export function SystemTable ({ system }: Props) {
  const entities = system.entities
    .reduce((es, e) =>
      'entities' in e
        ? [...es, e, ...e.entities]
        : [...es, e],
    []
    )

  return (
    <Table
      columns={{
        Entity: {
          view: ({ subEntity, name }) => {
            return subEntity
              ? <SubEntity>{name}</SubEntity>
              : name
          }
        },
        Type: { view: keyed('type') }
      }}
      data={entities}
    />
  )
}