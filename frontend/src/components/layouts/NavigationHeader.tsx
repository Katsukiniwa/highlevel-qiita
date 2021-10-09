import Link from "next/link"

export const NavigationHeader = () => {
  return (
    <div className="flex border-b-2 border-fuchsia-600 justify-between px-8 py-3 items-center">
      <Link href={{pathname: '/'}} passHref>
        <a className="text-3xl font-bold">
          Sortie
        </a>
      </Link>

      <div>
        <Link href={{pathname: '/login'}} passHref>
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            ログイン
          </button>
        </Link>
      </div>
    </div>
  )
}
