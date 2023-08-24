import Head from 'next/head'
import Image from 'next/image'
import StarRatings from 'react-star-ratings'

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
      <section className='md:p-10 lg:p-20'>
        <div className='flex flex-col lg:flex-row gap-14  items-start'>
          <div>
            <Image
              className='max-h-96'
              src={image}
              height={300}
              width={500}
              alt=''
            />
          </div>
          <div className='p-5'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p cl>{description}</p>
            <div className='flex items-center gap-5 '>
              <div>
                <StarRatings
                  starDimension='16px'
                  starSpacing='0px'
                  rating={averageRating}
                  starRatedColor='#ffc012'
                  starEmptyColor='#cfc19a63'
                />
              </div>
              <p className='text-sm mt-1'>
                {reviews.length}
                {reviews.length > 1 ? ' reviews' : ' review'}
              </p>
            </div>
            <div className='flex gap-5 my-3  flex-wrap  '>
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
                    <span className='capitalize w-40'>{feature}</span>
                    <span>:</span>
                    <span className='flex-1 font-semibold'> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='p-5'>
          {/* Render individual ratings */}

          <h3 className='text-2xl font-bold'>Customer Reviews</h3>

          {/* Render reviews */}
          <div>
            {reviews.map((review, index) => (
              <div
                key={`review-${index}`}
                className='bg-white rounded-md p-5 my-5 shadow-sm border '>
                <h4 className='text-xl font-medium'>{review.comment}</h4>
                <StarRatings
                  starDimension='16px'
                  starSpacing='0px'
                  rating={review.rating}
                  starRatedColor='#ffc012'
                  starEmptyColor='#cfc19a63'
                />
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
