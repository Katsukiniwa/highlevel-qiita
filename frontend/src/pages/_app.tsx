import '../styles/globals.scss'

import type { ReactElement, ReactNode } from 'react'
import { AuthenticationContextProvider } from '../store/AuthenticationContext'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { QuestionContextProvider } from '../store/QuestionContext'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

if (process.env.NODE_ENV === 'development') {
  const MockServer = () => import('../../mocks');
  MockServer();
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <AuthenticationContextProvider>
      <QuestionContextProvider>
        <Component {...pageProps} />
      </QuestionContextProvider>
    </AuthenticationContextProvider>
  )
}
