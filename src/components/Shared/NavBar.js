import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { data } = useSession()

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])
  const dropdownItems = categories.map((category) => (
    <li key={category._id}>
      <Link href={`/categories/${category._id}`}>{category.name}</Link>
    </li>
  ))

  return (
    <div className='navbar bg-base-300 sticky top-0 shadow-xl z-[999]'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className='p-2 z-20'>{dropdownItems}</ul>
              </details>
            </li>
            <li>
              {' '}
              {data?.user ? (
                <button onClick={() => signOut()}>Logout</button>
              ) : (
                <button onClick={() => signIn('github')}>Login</button>
              )}
            </li>
          </ul>
        </div>
        <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
          Dream PC
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className='p-2 z-50'>{dropdownItems}</ul>
            </details>
          </li>

          <li>
            {data?.user ? (
              <button onClick={() => signOut()}>Logout</button>
            ) : (
              <button
                onClick={() =>
                  signIn('github', {
                    callbackUrl:
                      'https://pc-builder-mahabubulislam.vercel.app/pc-builder'
                  })
                }>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href={'/pc-builder'} className='btn bg-teal-400 font-bold'>
          PC Builder
        </Link>
      </div>
    </div>
  )
}

export default NavBar
