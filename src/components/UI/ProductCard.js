import Image from 'next/image'
import { useRouter } from 'next/router'

const ProductCard = ({ product }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      key={product.id}
      className='card w-96 pt-5 max-h-80 bg-base-100 shadow-xl mt-10 cursor-pointer hover:scale-105 duration-300 ease-linear hover:bg-teal-100'>
      <figure>
        <Image width={100} height={100} src={product.img} alt={product.name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {product.name}
          <div className='badge badge-secondary'>NEW</div>
        </h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>$ {product.price}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>{product.categoryName}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
