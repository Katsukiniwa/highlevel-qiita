import Head from 'next/head'
import { ReactElement } from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import { AnswerCard } from '../../components/object/AnswerCard'

const QuestionShow = () => {
  return (
    <>
      <Head>
        <title>sample question title is here.</title>
        <meta name="description" content="how to learn programming?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="py-4 bg-gray-100">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-2/3">
              <div className="bg-white p-4 mr-8">
                <h1 className="text-4xl font-bold py-4">sample question title is here.</h1>
                <h1>TL;DR</h1>
                <p>foo</p>
                <p>bar</p>
              </div>

              <h3 className="py-4">2件の解答</h3>

              {[0, 1].map((item) => (
                <AnswerCard key={item} />
              ))}
            </div>
            <div className="w-1/3 bg-blue-100 p-4">
              <p>ad here?</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

QuestionShow.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}

export default QuestionShow
