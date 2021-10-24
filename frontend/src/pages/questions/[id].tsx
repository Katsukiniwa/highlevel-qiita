import Head from 'next/head'
import { ReactElement } from "react"
import BaseLayout from "../../components/layouts/BaseLayout"
import { AnswerCard } from "../../components/object/AnswerCard"

const QuestionShow = () => {
  return (
    <>
      <Head>
        <title>PHPフォルダから複数のファイルを取得し、ファイルを一つずつ読み込む方法</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="py-4 bg-gray-100">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-2/3">
              <div className="bg-white p-4 mr-8">
                <h1 className="text-4xl font-bold py-4">
                  PHPフォルダから複数のファイルを取得し、ファイルを一つずつ読み込む方法
                </h1>

                <h1>
                  解決したいこと
                </h1>
                <p>
                  現在、親画面から特定の子画面を一つのみ表示させる機能を作成していますが、その方法がわかりません。
                  親画面は複数開くことができるが、子画面は一つしか開けないようにする方法を知りたいです。
                <p>
                  例）
                    親画面ＡとＢが開かれているとして
                    ・Ａで特定の子画面を開く動作をする→子画面が開く
                    ・Ｂで、Ａと同じ子画面を開く動作をする→子画面が開かない
                </p>
                </p>
                  上記のような動作をさせたいです。
                <p>
                  自分で試したこと
                  親画面から子画面を開く際、子画面がある場合には開くことができないようにはしました。しかし、Aで一つの子画面，Bでも一つの子画面を開くことができてしまいます。
                </p>
              </div>

              <h3 className="py-4">2件の解答</h3>

              {[0, 1].map(item => (
                <AnswerCard key={item} />
              ))}

            </div>
            <div className="w-1/3 bg-blue-100">w-1/3</div>
          </div>
        </div>
      </main>
    </>
  )
}

QuestionShow.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default QuestionShow;
