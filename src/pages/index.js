import FeaturedCategories from '@/components/UI/FeaturedCategories'
import FeaturedProduct from '@/components/UI/FeaturedProduct'
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

        <FeaturedProduct products={products} />
        <FeaturedCategories categories={categories} />
      </main>
    </>
  )
}
export const getStaticProps = async () => {
  const productRes = await fetch('https://mrittik-server.vercel.app/products')
  const products = await productRes.json()
  const categoryRes = await fetch('https://mrittik-server.vercel.app/products')
  const categories = await categoryRes.json()
  return { props: { products, categories } }
}
