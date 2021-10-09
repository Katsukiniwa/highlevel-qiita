import type { ReactElement } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import React from "react"

export default function Login() {
  return (
    <React.Fragment>
      <div className='px-8 py-4'>
        <h1>ログイン</h1>
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
