import Head from 'next/head'
import Image from 'next/image'

const ProductDetails = ({ product }) => {
  const {
    image,
    name,
    category,
    status,
    price,
    description,
    keyFeatures,
    averageRating,
    reviews
  } = product
  return (
    <>
      <Head>
        <title>Product Details | {name}</title>
      </Head>
      <section className='p-20'>
        <div className='flex sm:flex-col md:flex-row gap-14  items-start'>
          <div>
            <Image
              className='max-h-96'
              src={image}
              height={300}
              width={500}
              alt=''
            />
          </div>
          <div className='p-10'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p cl>{description}</p>
            <div className='flex items-center gap-5'>
              <div className='rating rating-xs'>
                {[...Array(5)].map((_, i) => (
                  <input
                    key={`review-${i}`}
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                    checked={i !== Math.floor(averageRating)}
                    disabled
                  />
                ))}
              </div>
              <p className='text-sm'>
                {reviews.length}
                {reviews.length > 1 ? ' reviews' : ' review'}
              </p>
            </div>
            <div className='flex gap-5 my-3'>
              <div className='badge p-3 rounded-md bg-gray-300'>
                <span>
                  Price: <strong> {price}</strong>
                </span>
              </div>
              <div className='badge p-3 rounded-md bg-gray-300'>
                <span>
                  Brand: <strong> {keyFeatures.brand}</strong>
                </span>
              </div>
              <div className='badge p-3 rounded-md bg-gray-300'>
                <span>
                  Status: <strong> {status}</strong>
                </span>
              </div>
              <div className='badge p-3 rounded-md bg-gray-300'>
                <span>
                  Category: <strong> {category}</strong>
                </span>
              </div>
            </div>
            <div>
              <h6 className='font-bold'>Key Features</h6>
              <ul>
                {Object.entries(keyFeatures).map(([feature, value], i) => (
                  <li key={`feature-${i}`} className='flex gap-3'>
                    <span className='capitalize flex-1'>{feature}</span>
                    <span>:</span>
                    <span className='flex-1 font-semibold'> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* Render individual ratings */}

          <h3 className='text-2xl font-bold'>Customer Reviews</h3>

          {/* Render reviews */}
          <div>
            {reviews.map((review, index) => (
              <div
                key={`review-${index}`}
                className='bg-white rounded-md p-5 my-5'>
                <h4 className='text-xl font-medium'>{review.comment}</h4>
                {[...Array(5)].map((_, i) => (
                  <input
                    key={`user-review-${i}`}
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                    checked={i !== Math.floor(review.rating)}
                    disabled
                  />
                ))}
                <span className='font-medium ml-3'>By {review.user}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails
export const getStaticPaths = async () => {
  const productRes = await fetch('http://localhost:3000/api/products')
  const products = await productRes.json()
  const paths = products.map((product) => ({
    params: { productId: product._id }
  }))
  return {
    paths,
    fallback: false // false or "blocking"
  }
}
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${params.productId}`
  )
  const product = await res.json()

  return { props: { product } }
}
