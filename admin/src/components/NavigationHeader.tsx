import Link from 'next/link'
import Image from 'next/image'

export async function NavigationHeader(): Promise<JSX.Element> {
  const session = {
    user: null,
  }

  return (
    <header className="flex justify-between px-4 md:px-8 py-2 items-center">
      <Link className="text-3xl font-bold" href={{ pathname: '/' }} passHref>
        Admin
      </Link>

      <div>
        <div className="flex justify-center">
          {session?.user ? (
            <div className="relative group">
              <button
                className="rounded-md bg-white focus:outline-none"
                title="User menu"
                type="button"
              >
                <div className="">
                  <Image
                    alt="sample"
                    className="rounded-full"
                    height={40}
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    width={40}
                  />
                </div>
              </button>
              <div className="hidden group-hover:block hover:block absolute right-0 w-48 bg-white rounded-md shadow-2xl z-20">
                <Link
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-100"
                  href={{ pathname: '/dashboard' }}
                  passHref
                >
                  Dashboard
                </Link>
                <Link
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-100"
                  href="/comments/new"
                >
                  Comment
                </Link>
                <Link
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-100"
                  href="/settings"
                >
                  Settings
                </Link>
                <div className="border-t-2 border-gray-200">
                  <form
                  // action={async () => {
                  //   "use server";
                  //   await signOut();
                  // }}
                  >
                    <button
                      className="w-full flex px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-100"
                      type="submit"
                    >
                      Sign Out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row">
              <Link
                className="py-1 px-2 font-semibold rounded shadow-sm text-white bg-green-400 hover:bg-green-700"
                href="/login"
              >
                login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
