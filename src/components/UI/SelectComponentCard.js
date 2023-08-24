import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const SelectComponentCard = ({ category }) => {
  const { pcComponents } = useSelector((state) => state.pcBuild)
  const component = pcComponents.find(
    (component) => component.categoryId === category._id
  )

  return (
    <div
      key={category._id}
      className='bg-white rounded-md p-5 my-5 shadow-sm border flex justify-between items-center w-3/5 mx-auto '>
      <div className='flex items-center gap-5 '>
        <h6 className='text-lg'>{category.name}</h6>
        <Image
          className='rounded-md'
          src={category.img}
          alt={category.name}
          height={30}
          width={40}
        />
      </div>
      {component && (
        <div className='w-96 flex flex-col'>
          <div className='flex items-center gap-5'>
            <h6 className='font-medium'>{component?.name}</h6>
            <Image
              src={component?.image}
              height={40}
              width={40}
              alt={component?.name}
            />
          </div>
          <small>Price: {component?.price}</small>
        </div>
      )}
      <Link href={`/pc-builder/${category._id}`} className='btn bg-accent'>
        Select
      </Link>
    </div>
  )
}

export default SelectComponentCard
