import Footer from '../Shared/Footer'
import NavBar from '../Shared/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
