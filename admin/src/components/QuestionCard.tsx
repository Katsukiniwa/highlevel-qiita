import Link from "next/link";

interface Props {
  id: string;
  title: string;
  content: string;
}

export const QuestionCard = ({ id, title, content }: Props) => {
  return (
    <div className="col-span-1 flex flex-col bg-white shadow-md border border-gray-200 rounded-lg p-5">
      <div className="h-full flex flex-col justify-around">
        <Link href={`/questions/${id}`}>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {title}
          </h5>
        </Link>
        <p className="font-normal text-gray-700">{content}</p>
        <Link
          href={`/questions/${id}`}
          className="md:w-1/3 mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-3 py-2 text-center items-center"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
