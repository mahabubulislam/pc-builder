import Image from 'next/image'

const FeaturedProduct = ({ products }) => {
  return (
    <div className='mt-10'>
      <h3 className='text-3xl font-bold mb-10'>Featured Products</h3>
      <div className='grid grid-cols-3 gap-5'>
        {products?.map((product) => (
          <div
            key={product.id}
            className='card w-96 pt-5 max-h-80 bg-base-100 shadow-xl mt-10 cursor-pointer hover:scale-y-90 duration-500 ease-linear hover:bg-teal-100'>
            <figure>
              <Image
                width={100}
                height={100}
                src={product.img}
                alt={product.name}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {product.name}
                <div className='badge badge-secondary'>NEW</div>
              </h2>

              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>$ {product.price}</p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>
                  {product.categoryName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProduct
