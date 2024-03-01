import { getChartRandomData } from '@/lib/data'
import { Table, Heading } from '@radix-ui/themes'

export default async function Page() {
  const dataList = await getChartRandomData()

  return (
    <div className="bg-red-200 p-4 rounded-xl">
      <Heading>Analytics</Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>pv</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>content</Table.ColumnHeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataList.map((data) => (
            <Table.Row key={data.name}>
              <Table.RowHeaderCell>{data.name}</Table.RowHeaderCell>
              <Table.Cell>{data.pv}</Table.Cell>
              {/* <Table.Cell>{question.content}</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
