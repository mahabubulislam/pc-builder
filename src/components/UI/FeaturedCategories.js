import CategoriesCard from './CategoriesCard'

const FeaturedCategories = ({ categories }) => {
  return (
    <div className='my-10 '>
      <h3 className='text-3xl my-5 font-bold'>Featured Categories</h3>
      <div class='grid grid-cols-3 gap-4'>
        {categories.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategories
