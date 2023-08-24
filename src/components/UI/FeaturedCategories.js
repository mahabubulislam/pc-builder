import CategoriesCard from './CategoriesCard'

const FeaturedCategories = ({ categories }) => {
  return (
    <div className='my-10 '>
      <div className='text-center my-5 italic'>
        <h3 className='text-3xl font-bold mb-1 '>Featured Categories</h3>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {categories.map((category) => (
          <CategoriesCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategories
