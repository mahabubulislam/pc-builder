import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='hero w-full min-h-[80vh]'>
      <div className='hero-content flex-col lg:flex-row-reverse gap-20 max-w-full  pt-10 w-full'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>Login and build your dream PC</p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                required
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <p className='label-text-alt '>
                  Don&apos;t have an account?{' '}
                  <Link className='link link-hover' href={'/register'}>
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
              <button
                className='btn btn-primary mt-3'
                onClick={() =>
                  signIn('github', {
                    callbackUrl: 'http://localhost:3000/pc-builder'
                  })
                }>
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
