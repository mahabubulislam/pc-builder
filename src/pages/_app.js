import Layout from '@/components/Layout/Layout'
import store from '@/redux/store'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}
