import Link from 'next/link'

export const CategoryLabel = ({ categoryId, name }: { categoryId: number; name: string }) => {
  return (
    <Link
      href={`/categories/${encodeURIComponent(categoryId)}`}
      className="text-xl shadow bg-white px-16 py-3 hover:bg-gray-200 rounded"
    >
      {name}
    </Link>
  )
}
