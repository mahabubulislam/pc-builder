import FeaturedCategories from '@/components/UI/FeaturedCategories'
import FeaturedProducts from '@/components/UI/FeaturedProducts'
import Hero from '@/components/UI/Hero'
import Head from 'next/head'

export default function Home({ products, categories }) {
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
        <Hero />

        <FeaturedProducts products={products} />
        <FeaturedCategories categories={categories} />
      </main>
    </>
  )
}
export const getStaticProps = async () => {
  const productRes = await fetch('http://localhost:3000/api/products')
  const products = await productRes.json()
  const categoryRes = await fetch('http://localhost:3000/api/categories')
  const categories = await categoryRes.json()
  return { props: { products, categories } }
}
