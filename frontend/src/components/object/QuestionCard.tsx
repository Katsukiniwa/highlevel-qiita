import Link from "next/link"

export const QuestionCard = ({ id, title }: { id: string, title: string }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <div className="p-5">
          <Link
            href={{
              pathname: '/questions/[id]',
              query: { id },
            }}
          >
            <a>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {title}
              </h5>
            </a>
          </Link>
          <p className="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Link
            href={{
              pathname: '/questions/[id]',
              query: { id },
            }}
          >
          <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center">
            Read more
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
