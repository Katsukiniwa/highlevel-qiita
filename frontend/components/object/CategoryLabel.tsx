export const CategoryLabel = ({ name }: { name: string }) => {
  return (
    <a className="text-xl shadow bg-white px-16 py-3 hover:bg-gray-200 rounded" href="#">
      { name }
    </a>
  )
}
