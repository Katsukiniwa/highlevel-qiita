import '../styles/globals.scss'

import type { ReactChild, ReactElement, ReactNode } from 'react'
import { AuthenticationContextProvider } from '../store/AuthenticationContext'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { QuestionContextProvider } from '../store/QuestionContext'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactChild
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  const MockServer = () => import('../../mocks');
  MockServer();
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthenticationContextProvider>
      <QuestionContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </QuestionContextProvider>
    </AuthenticationContextProvider>
  )
}
