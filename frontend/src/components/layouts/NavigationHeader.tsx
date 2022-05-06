import Link from 'next/link'
import { useContext } from 'react'
import Image from 'next/image'
import { AuthenticationContext } from '../../store/AuthenticationContext'

export const NavigationHeader = () => {
  const loginState = useContext(AuthenticationContext)
  const imageSrc =
    'https://images.unsplash.com/photo-1651662897682-2a1a73d7518e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

  return (
    <div className="flex border-b-2 border-fuchsia-600 justify-between px-8 py-3 items-center">
      <Link href={{ pathname: '/' }} passHref>
        <a className="text-3xl font-bold">Sortie</a>
      </Link>

      <div>
        {loginState.login ? (
          <div className="flex row justify-center">
            <div className="mr-4">
              <Image width={40} height={40} src={imageSrc} alt="sample" className="rounded-full" />
            </div>
            <div className="flex items-center">
              <Link href={{ pathname: '/questions/new' }} passHref>
                <button className="px-4 font-semibold rounded shadow-md text-white bg-green-500 hover:bg-green-700 h-4/5">
                  質問する
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <Link href={{ pathname: '/login' }} passHref>
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
              ログイン
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
