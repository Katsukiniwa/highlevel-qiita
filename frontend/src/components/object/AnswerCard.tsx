import Image from 'next/image'

export const AnswerCard = () => {
  return (
    <div className="bg-white p-4 border-b-2 border-blue-100">
      <div className="flex flex-row items-center">
        <div className="mr-2">
          <Image
            className="inline object-cover w-10 h-10 rounded-full"
            width={40}
            height={40}
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Profile image"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">Katsukiniwa</span>
          <span className="text-sm">コメント日: 2022/5/9</span>
        </div>
      </div>
      <p>sample comment is here</p>
    </div>
  )
}
