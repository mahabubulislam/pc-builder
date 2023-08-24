import ProductCard from '@/components/UI/ProductCard'

const ProductByCategories = ({ products }) => {
  return (
    <div className='p-10'>
      <div className=' my-5 italic'>
        <h3 className='text-3xl font-bold mb-1 '>
          Top Selling <span className='capitalize'>{products[0].category}</span>
        </h3>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 '>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductByCategories

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/categories')
  const categories = await res.json()
  const paths = categories.map((category) => ({
    params: { categoryId: category._id }
  }))
  return {
    paths,
    fallback: false // false or "blocking"
  }
}
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/categories/${params.categoryId}`
  )
  const products = await res.json()

  return { props: { products } }
}
