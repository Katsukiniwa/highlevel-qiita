import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BaseLayout from '../components/layouts/BaseLayout'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('password')
  const [loading, setLoading] = useState(false)

  const submitLoginForm = (e: React.FormEvent) => {
    // TODO: 実装する
  }

  return (
    <React.Fragment>
      <Head>
        <title>ログイン</title>
        <meta name="description" content="ログイン" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full md:w-1/2 mx-auto p-8">
        <form
          className="bg-white shadow-md rounded px-8 py-4 mb-4"
          onSubmit={(e) => submitLoginForm(e)}
        >
          <h2 className="mb-4">会員登録</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="山田太郎"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="account@example.com"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            {/* <a
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
              href="#"
            >
              パスワードを忘れた場合
            </a> */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? '登録中...' : '登録する'}
            </button>
          </div>

          <div className="flex flex-col justify-between my-4">
            <Link href={{ pathname: '/login' }} passHref>
              <a
                className="inline-block mt-2 align-baseline text-sm text-green-500 hover:text-green-800"
                href="#"
              >
                アカウントをお持ちの場合
              </a>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Katsukiniwa. All rights reserved.
        </p>
      </div>
    </React.Fragment>
  )
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
