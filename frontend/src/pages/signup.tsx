import React, { ReactElement, useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BaseLayout from '../components/layouts/BaseLayout'
import { AuthenticationContext, LoginContext } from '../store/AuthenticationContext'
import { actions } from '../module/authentication/login'
import { useSignUpMutation } from '../types/generated/type'
import { useRouter } from 'next/router'

export default function SignUpPage() {
  const router = useRouter()
  const loginState = useContext(AuthenticationContext)
  const loginDispatch = useContext(LoginContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('password')

  const [signUp, { loading }] = useSignUpMutation({
    variables: {
      name,
      email,
      password,
    },
    onCompleted: (result) => {
      loginDispatch(actions.successLoginAction())
      localStorage.setItem('profile', JSON.stringify(result.signUp))
      router.push('/')
      setTimeout(() => {
        alert('登録しました')
      }, 1000)
    },
    onError: (error) => {
      console.error(error.message)
    },
  })

  const submitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault()

    loginDispatch(actions.startLoginAction())
    await signUp()
  }

  useEffect(() => {
    if (loginState.login) {
      router.push('/')
    }
  }, [loginState.login, router])

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
