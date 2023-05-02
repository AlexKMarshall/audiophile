export default function CategoryPage({
  params,
}: {
  params: { categoryName: string }
}) {
  return (
    <div className="bg-black py-8 text-white sm:py-24">
      <h1 className="text-center text-3xl font-bold uppercase tracking-widest">
        {params.categoryName}
      </h1>
    </div>
  )
}
