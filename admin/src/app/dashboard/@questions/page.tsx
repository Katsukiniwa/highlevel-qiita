import { getQuestions } from "@/lib/data";
import { Table, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default async function Page() {
  const questions = await getQuestions();

  return (
    <div className="bg-sky-200 p-4 rounded-xl">
      <Heading>Questions</Heading>
      <Link href="/dashboard/draft" className="my-4">
        Draft
      </Link>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>title</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>content</Table.ColumnHeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map((question) => (
            <Table.Row key={question.id}>
              <Table.RowHeaderCell>
                <Link href={`/dashboard/${question.id}`}>{question.id}</Link>
              </Table.RowHeaderCell>
              <Table.Cell>{question.title}</Table.Cell>
              {/* <Table.Cell>{question.content}</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
