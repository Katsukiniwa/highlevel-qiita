import Head from 'next/head'
import BaseLayout from '../components/layouts/BaseLayout'
import React, { ReactElement } from 'react'
import { CategoryLabel } from '../components/object/CategoryLabel'
import { QuestionCard } from '../components/object/QuestionCard'
import { useCategoriesQuery, useQuestionsPerPageQuery } from '../types/generated/types.d'

export default function Home() {
  const { loading, data } = useQuestionsPerPageQuery({
    variables: {
      page: 1,
    },
  })
  const { data: categories } = useCategoriesQuery()

  return (
    <div>
      <Head>
        <title>Sortie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This site is created by GraphQL on Rails and Next.js" />
        <meta property="og:title" content="Sortie" key="Sortie" />
        <meta
          property="og:description"
          content="This site is created by GraphQL on Rails and Next.js"
        />
        <meta property="og:image" content="https://katsukiniwa.dev/images/person_of_interest.jpg" />
        <meta name="twitter:card" content={'summary_large_image'} />
      </Head>

      <main>
        {loading || !data ? (
          <p className="px-8 py-4">loading...</p>
        ) : (
          <div>
            <div className="px-4 md:px-8 py-4 bg-green-50">
              <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
                カテゴリから探す
              </h2>
              <div className="flex flex-row flex-wrap gap-8">
                {categories?.categories.map((e) => (
                  <CategoryLabel key={e.id} name={e.name} categoryId={e.id} />
                ))}
              </div>
            </div>
            <div className="px-4 md:px-8 py-4 bg-gray-100">
              <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
                人気の質問から探す
              </h2>
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto">
                {data.questionsPerPage.questions.map((item) => (
                  <QuestionCard
                    key={item.id}
                    id={item.id.toString()}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            <div className="px-4 md:px-8 py-4 bg-gray-100">
              <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
                最新の質問から探す
              </h2>
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4">
                {data.questionsPerPage.questions.map((item) => (
                  <QuestionCard
                    key={item.id}
                    id={item.id.toString()}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
