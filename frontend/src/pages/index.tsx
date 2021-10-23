import Head from 'next/head'
import BaseLayout from '../components/layouts/BaseLayout'
import React, { ReactElement } from 'react'
import { CategoryLabel } from '../components/object/CategoryLabel'
import { QuestionCard } from '../components/object/QuestionCard'
import { useQuestionFetch } from '../module/question/hooks/useQuestionFetch'
import { NavigationHeader } from '../components/layouts/NavigationHeader'

export default function Home() {
  const [questions, refetch] = useQuestionFetch()

  return (
    <div>
      <Head>
        <title>Sortie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <NavigationHeader /> */}

      <main>
        <div className='px-8'>
          <button onClick={() => refetch()}>fetch</button>
        </div>
        <div className='px-8 py-4 bg-green-50'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            カテゴリから探す
          </h2>
          <div className="flex flex-row flex-wrap gap-8">
            <CategoryLabel name='DDD' />
            <CategoryLabel name='オブジェクト指向' />
            <CategoryLabel name='アーキテクチャ' />
            <CategoryLabel name='クリーンアーキテクチャ' />
            <CategoryLabel name='アジャイル' />
            <CategoryLabel name='マネジメント' />
            <CategoryLabel name='テックリード' />
            <CategoryLabel name='関数型' />
          </div>
        </div>
        <div className='px-8 py-4 bg-gray-100'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            人気の質問から探す
          </h2>
          <div className="grid gap-4 grid-cols-4">
            {questions.questions.map(item => (
              <div key={item.id}>
                <QuestionCard id={item.id} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        <div className='px-8 py-4 bg-gray-100'>
          <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
            最新の質問から探す
          </h2>
          <div className="grid gap-4 grid-cols-4">
            {questions.questions.map(item => (
              <div key={item.id}>
                <QuestionCard id={item.id} title={item.title} />
              </div>
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
