import Image from 'next/image'
import { useRouter } from 'next/router'

const CategoriesCard = ({ category }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/categories/${category._id}`)}
      className='category card max-h-72 bg-base-100 shadow-xl image-full cursor-pointer overflow-hidden'>
      <figure className='duration-700 ease-in-out'>
        <Image
          src={category.img}
          alt={category.name}
          width={500}
          height={200}
        />
      </figure>
      <div className='card-body flex justify-center items-center'>
        <h2 className='card-title text-4xl'>{category.name}</h2>
      </div>
    </div>
  )
}

export default CategoriesCard
