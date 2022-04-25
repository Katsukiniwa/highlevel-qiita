import Head from 'next/head'
import BaseLayout from '../components/layouts/BaseLayout'
import React, { ReactElement } from 'react'
import { CategoryLabel } from '../components/object/CategoryLabel'
import { QuestionCard } from '../components/object/QuestionCard'
import { useCategoriesQuery, useQuestionsPerPageQuery } from "../types/generated/types.d";

export default function Home () {
  const { loading, data } = useQuestionsPerPageQuery({
    variables: {
      page: 1
    }
  })
  const { data: categories } = useCategoriesQuery()

  if (loading || !data) return (
    <div>ローディングなう...</div>
  )

  return (
    <div>
      <Head>
        <title>Sortie</title>
        <meta name="description" content="This site is created by GraphQL on Rails and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='px-8 py-4 bg-green-50'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            カテゴリから探す
          </h2>
          <div className="flex flex-row flex-wrap gap-8">
            {categories?.categories.map(e => (
              <CategoryLabel key={e.id} name={e.name} />
            ))}
          </div>
        </div>
        <div className='px-8 py-4 bg-gray-100'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            人気の質問から探す
          </h2>
          <div className="grid grid-cols-4 gap-4 mx-auto">
            {data.questionsPerPage.questions.map(item => (
              <QuestionCard key={item.id} id={item.id.toString()} title={item.title} />
            ))}
          </div>
        </div>
        <div className='px-8 py-4 bg-gray-100'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            最新の質問から探す
          </h2>
          <div className="grid gap-4 grid-cols-4">
            {data.questionsPerPage.questions.map(item => (
              <QuestionCard key={item.id} id={item.id.toString()} title={item.title} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
