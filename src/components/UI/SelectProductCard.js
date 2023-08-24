import { addToBuild } from '@/redux/features/pcBuildSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const SelectProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleAddParts = () => {
    dispatch(addToBuild(product))
    router.push('/pc-builder')
  }
  return (
    <div
      key={product._id}
      className='card w-96 pt-5  bg-base-100 shadow-xl mt-10 '>
      <figure className='overflow-visible'>
        <Image
          width={200}
          height={100}
          src={product.image}
          alt={product.name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <Link href={`/products/${product._id}`}> {product.name}</Link>
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>{product.description.slice(0, 50)}...</p>
        <p>$ {product.price}</p>
        <div className='card-actions justify-end'>
          <button onClick={handleAddParts} className='btn btn-info'>
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectProductCard
