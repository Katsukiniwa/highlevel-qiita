/* eslint-disable @next/next/no-img-element */
export const AnswerCard = () => {
  return (
    <div className="bg-white p-4 mr-8">
      <div className="flex flex-row items-center">
        <img
          className="inline object-cover w-10 h-10 mr-2 rounded-full"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Profile image"
        />
        <div className="flex flex-col">
          <span className="font-medium">Katsukiniwa</span>
          <span className="text-sm">コメント日: 2021/12/21</span>
        </div>
      </div>
      <p>
        子画面とはどういうものを言っていますか？
      </p>
      <p>
        親画面から子画面を開く際、子画面がある場合には開くことができないようにはしました。
      </p>
      <p>
        どうやりましたか？
      </p>
    </div>
  )
}
