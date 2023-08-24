import SelectComponentCard from '@/components/UI/SelectComponentCard'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const PCBuilder = ({ categories }) => {
  const { pcComponents } = useSelector((state) => state.pcBuild)
  const { data } = useSession()

  return (
    <>
      <Head>
        <title>Build PC | Dream PC</title>
      </Head>
      <section className='p-10'>
        <div className='text-center'>
          <h3 className='text-4xl italic my-5'>
            Welcome back{' '}
            <strong className=' text-accent'>{data?.user?.name}</strong>
          </h3>
          <h4 className='text-2xl font-bold '>
            Build your own computer - Dream PC
          </h4>
          <p>Select your components, You will get best pc parts</p>
        </div>
        <div>
          {categories.map((category) => (
            <SelectComponentCard key={category._id} category={category} />
          ))}
        </div>
        <button
          onClick={() => toast.success('Your PC Build Completed')}
          className='btn mx-auto w-1/5 block btn-success'
          disabled={pcComponents.length !== 6}>
          Complete Build
        </button>
      </section>
      <Toaster />
    </>
  )
}

export default PCBuilder

export const getServerSideProps = async () => {
  const categoriesRes = await fetch('http://localhost:3000/api/categories')
  const categories = await categoriesRes.json()

  return { props: { categories } }
}
