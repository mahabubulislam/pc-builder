import ProductCard from './ProductCard'

const FeaturedProducts = ({ products }) => {
  return (
    <div className='mt-10'>
      <div className='text-center my-5 italic'>
        <h3 className='text-3xl font-bold mb-1 '>Featured Products</h3>
        <p>Choose Your Favorite Product from Featured Products!</p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 '>
        {products?.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
