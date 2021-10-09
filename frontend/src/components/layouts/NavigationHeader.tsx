import Link from "next/link"

export const NavigationHeader = () => {
  return (
    <div className="space-x-4 border-b-2 border-fuchsia-600 justify-between">
      <div className="flex justify-between container mx-auto my-2 items-center">
        <Link href={{pathname: '/'}} passHref>
          <a className="text-2xl font-bold">
            Qiita
          </a>
        </Link>

        <div>
          <button className="btn btn-blue">
            ログイン
          </button>
        </div>
      </div>
    </div>
  )
}
