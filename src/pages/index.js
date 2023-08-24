import FeaturedCategories from '@/components/UI/FeaturedCategories'
import FeaturedProducts from '@/components/UI/FeaturedProducts'
import Hero from '@/components/UI/Hero'
import Head from 'next/head'

export default function Home({ products, categories, heroProduct }) {
  return (
    <>
      <Head>
        <title>PC Builder | Home</title>
        <meta
          name='description'
          content='This is a pc builder website made by next-js and tailwind css'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' px-14'>
        <Hero heroProduct={heroProduct} />
        <FeaturedCategories categories={categories} />
        <FeaturedProducts products={products} />
      </main>
    </>
  )
}
export const getStaticProps = async () => {
  const productRes = await fetch(
    'https://pc-builder-mahabubulislam.vercel.app/api/products'
  )
  const products = await productRes.json()
  const categoryRes = await fetch(
    'https://pc-builder-mahabubulislam.vercel.app/api/categories?featured=true'
  )
  const categories = await categoryRes.json()
  const heroProductRes = await fetch(
    `https://pc-builder-mahabubulislam.vercel.app/api/products/64e70f456db70ddcf0a25c6e`
  )
  const heroProduct = await heroProductRes.json()
  return { props: { products, categories, heroProduct } }
}
