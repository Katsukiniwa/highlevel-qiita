import type { ReactElement } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import React from "react"
import Head from 'next/head'
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  username: String;
  password: String;
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
  };

  return (
    <React.Fragment>
      <Head>
        <title>ログイン</title>
        <meta name="description" content="ログイン" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/2 mx-auto p-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              {...register("username")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ユーザ名"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              ログイン
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
              パスワードを忘れた場合
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 Kirinji. All rights reserved.
        </p>
      </div>
    </React.Fragment>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
