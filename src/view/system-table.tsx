import * as React from 'react'
import styled from 'styled-components'
import { Table, keyed } from '~/view/table'
import { useModel } from '~/view/model'

const StyledTable = styled(Table)``

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
  className?: string;
}

export function SystemTable ({ className }: Props) {
  const [{ currentSystem }] = useModel()

  const entities = currentSystem.entities
    .reduce((es, e) =>
      'entities' in e
        ? [...es, e, ...e.entities]
        : [...es, e],
    []
    )

  return (
    <StyledTable
      className={className}
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
      height={200}
    />
  )
}
