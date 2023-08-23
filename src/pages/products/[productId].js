import Image from 'next/image'
import Link from 'next/link'

const ProductDetails = ({ product }) => {
  return (
    <section className='p-20'>
      <div className='flex sm:flex-col md:flex-row gap-14  items-start'>
        <div>
          <Image src={product.img} height={300} width={500} alt='' />
        </div>
        <div className='p-10'>
          <h3 className='text-3xl'>{product.name}</h3>
          <div className='rating rating-xs'>
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              disabled
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              disabled
              checked
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              disabled
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              checked
              disabled
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-orange-400'
              disabled
            />
          </div>
          <div className='flex'>
            <p>
              Price:<span>{product.price}</span>
            </p>
            <p>Status</p>
            <p>Brand</p>
          </div>
          <div>
            <h6>Key Features</h6>
            <p>Good Good</p>
            <p>Good Good</p>
            <p>Good Good</p>
            <p>Good Good</p>
            <p>Good Good</p>
          </div>
          <Link href={'#specifications'}>View More</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
export const getStaticPaths = async () => {
  const productRes = await fetch('https://mrittik-server.vercel.app/products')
  const products = await productRes.json()
  const paths = products.map((product) => ({
    params: { productId: product.id }
  }))
  return {
    paths,
    fallback: false // false or "blocking"
  }
}
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://mrittik-server.vercel.app/products/${params.productId}`
  )
  const product = await res.json()
  return { props: { product } }
}
