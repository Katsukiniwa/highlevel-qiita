import Head from 'next/head'
import BaseLayout from '../../components/layouts/BaseLayout'
import React, { ReactElement } from 'react'
import { QuestionCard } from '../../components/object/QuestionCard'
import { CategoryLabel } from '../../components/object/CategoryLabel'
import { useCategoriesQuery, useCategoryQuestionsQuery } from '../../types/generated/types.d'
import { useRouter } from 'next/router'

export default function CategoryDetail() {
  const router = useRouter()
  const { data: categories } = useCategoriesQuery()
  const { loading, data } = useCategoryQuestionsQuery({
    variables: {
      categoryId: router.query.id as string,
      page: 1,
    },
  })

  if (loading || !data) return <div>ローディングなう...</div>

  return (
    <div>
      <Head>
        <title>{data.categoryQuestions.category.name}の質問</title>
        <meta name="description" content="This site is created by GraphQL on Rails and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="px-8 py-4 bg-green-50">
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            カテゴリから探す
          </h2>
          <div className="flex flex-row flex-wrap gap-8">
            {categories?.categories.map((e) => (
              <CategoryLabel key={e.id} name={e.name} categoryId={e.id} />
            ))}
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-100">
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            {data.categoryQuestions.category.name}の質問を探す
          </h2>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto">
            {data.categoryQuestions.questions.map((item) => (
              <QuestionCard key={item.id} id={item.id.toString()} title={item.title} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

CategoryDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
