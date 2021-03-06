import * as React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  line-height: 2;
  width: 100%;
`

const Tbody = styled.tbody``

const Td = styled.td`
  font-weight: 300;
  padding: 0px var(--medium);
  text-align: ${({ align }) => align || 'left'};
`

const Th = styled.th`
  padding: 0px var(--medium);
  text-align: ${({ align }) => align || 'left'};
`

const Thead = styled.thead``

const Tr = styled.tr`
  &:nth-child(2n+1) {
    background-color: rgba(248, 248, 248, 0.025);
  }
`

export const keyed = (k: string) => (o: Record<string, any>) => o[k]

interface Column {
  align?: string;
  view: (row: any) => React.ReactNode;
}

interface Props {
  columns: Record<string, Column>;
  data: any[];
}

export function Table ({ columns, data }: Props) {
  const columnHeaders = Object.entries(columns)
    .map(([name, { align }]) =>
      <Th align={align} key={name}>{name}</Th>
    )

  const bodyRows = data.map((record, i) => {
    const cells = Object.entries(columns)
      .map(([key, { align, view }]) =>
        <Td align={align} key={key}>{view(record)}</Td>
      )
    return <Tr key={i}>{cells}</Tr>
  })

  return (
    <StyledTable>
      <Thead>
        <tr>
          {columnHeaders}
        </tr>
      </Thead>
      <Tbody>
        {bodyRows}
      </Tbody>
    </StyledTable>
  )
}
