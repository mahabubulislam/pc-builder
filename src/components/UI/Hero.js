import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content flex-col lg:flex-row gap-20 max-w-full  pt-10'>
        <Image
          width={800}
          height={400}
          alt='Hero'
          src='/samsung-monitor.webp'
          className='rounded-lg shadow-2xl '
        />
        <div>
          <h1 className='text-5xl font-bold'>
            Top Selling Monitor in this month!
          </h1>
          <p className='py-6'>
            Samsung M8 32 Inch 4K UHD Micro HDMI USB Flat Gaming Monitor. Eye
            Saver Mode. Flicker Free. Game Mode. Game Bar 2.0. Auto Source
            Switch+. Ultrawide Game View.
          </p>
          <button className='btn btn-primary'>Details</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
