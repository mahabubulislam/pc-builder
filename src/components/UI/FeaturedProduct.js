import ProductCard from './ProductCard'

const FeaturedProduct = ({ products }) => {
  return (
    <div className='mt-10'>
      <h3 className='text-3xl font-bold mb-10'>Featured Products</h3>
      <div className='grid grid-cols-3 gap-5'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProduct
