import { getCustomers } from "@/lib/data";
import { Heading, Table } from "@radix-ui/themes";

export default async function Page() {
  const customers = await getCustomers();
  const roles = ["Developer", "Admin", "Sales"];

  return (
    <div className="bg-yellow-200 p-4 rounded-xl">
      <Heading>Customers</Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((customer, index) => (
            <Table.Row key={customer.id}>
              <Table.RowHeaderCell>{customer.name}</Table.RowHeaderCell>
              <Table.Cell>{customer.email}</Table.Cell>
              <Table.Cell>{roles[index % 3]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
