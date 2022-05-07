import Link from 'next/link'

export const QuestionCard = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="col-span-1 flex flex-col bg-white shadow-md border border-gray-200 rounded-lg p-5">
      <div className="h-full flex flex-col justify-around">
        <Link
          href={{
            pathname: '/questions/[id]',
            query: { id },
          }}
        >
          <a>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
          </a>
        </Link>
        <p className="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
        <Link
          href={{
            pathname: '/questions/[id]',
            query: { id },
          }}
        >
          <a className="md:w-1/3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-3 py-2 text-center items-center">
            Read more
          </a>
        </Link>
      </div>
    </div>
  )
}
