import { CategoryLabel } from "@/components/CategoryLabel";
import { getCategories } from "@/lib/data";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="col-span-9 sm:col-span-7">
      <div className="px-4 md:px-8 py-4 bg-green-50 rounded-xl mb-4">
        <h2 className="my-4 pl-3 text-xl font-bold border-l-4 border-green-300">
          カテゴリから探す
        </h2>
        <div className="flex flex-row flex-wrap gap-8">
          {categories.map((e) => (
            <CategoryLabel key={e.id} name={e.name} categoryId={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
