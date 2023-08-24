const ProductByCategories = () => {
  return <div></div>
}

export default ProductByCategories

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/categories')
  const categories = await res.json()
  const paths = categories.map((category) => ({
    params: { categoryId: category._id }
  }))
  return {
    paths,
    fallback: false // false or "blocking"
  }
}
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/categories/${params.categoryId}`
  )
  const category = await res.json()

  return { props: { category } }
}
