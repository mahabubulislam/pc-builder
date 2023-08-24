import SelectProductCard from '@/components/UI/SelectProductCard'

const PCParts = ({ products }) => {
  return (
    <section className='p-10'>
      <h3 className='text-2xl font-bold'>Select {products[0].category}</h3>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 '>
        {products?.map((product) => (
          <SelectProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default PCParts
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/categories/${params.partsId}`
  )
  const products = await res.json()

  return { props: { products } }
}
