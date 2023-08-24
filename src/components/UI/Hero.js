import Image from 'next/image'
import { useRouter } from 'next/router'

const Hero = ({ heroProduct }) => {
  const router = useRouter()
  return (
    <section className='hero'>
      <div className='hero-content flex-col lg:flex-row gap-20 max-w-full  pt-10'>
        <Image
          onClick={() => router.push(`/products/${heroProduct._id}`)}
          width={800}
          height={400}
          alt='Hero'
          src={'/samsung-monitor.webp'}
          className='rounded-lg shadow-2xl cursor-pointer'
        />
        <div>
          <h1 className='text-5xl font-bold'>
            Top Selling Monitor in this month!
          </h1>
          <p className='py-6'>{heroProduct.description}</p>
          <button
            onClick={() => router.push(`/products/${heroProduct._id}`)}
            className='btn btn-primary'>
            Details
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
