import { QuestionCard } from '@/components/QuestionCard'
import { getCategoryById, getQuestionsByCategoryId } from '@/lib/data'
import React from 'react'

export default async function CategoryDetail({ params }: { params: { id: string } }) {
  const category = await getCategoryById(Number(params.id))
  const questions = await getQuestionsByCategoryId(Number(params.id))

  return (
    <main>
      <div className="px-4 md:px-8 py-4 bg-gray-100">
        <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
          {category.name}の質問を探す
        </h2>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto">
          {questions.map((item) => (
            <QuestionCard
              key={item.id}
              id={item.id.toString()}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
