import Layout from '@/components/Layout/Layout'
import Footer from '@/components/Shared/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
