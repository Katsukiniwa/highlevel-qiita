import { NextPage } from "next"
import { NavigationHeader } from '../../components/layouts/NavigationHeader'

const QuestionIndex: NextPage = () => {
  return (
    <>
      <NavigationHeader />
      
      <main>
        <div className="py-4 bg-gray-100">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-2/3 bg-white p-4 mr-8">
              <p className="text-xl font-bold">
                PHP フォルダから複数のファイルを取得し、ファイルを一つずつ読み込む方法
              </p>
            </div>
            <div className="w-1/3 bg-blue-100">w-1/3</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default QuestionIndex;
