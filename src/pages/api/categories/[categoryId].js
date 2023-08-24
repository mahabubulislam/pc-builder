import { ObjectId } from 'mongodb'
import clientPromise from '../../../../lib/mongodb'

export default async function ProductByCategories(req, res) {
  try {
    const client = await clientPromise
    const productsCollection = client.db('pc-builder').collection('products')
    const { categoryId } = req.query
    const query = { categoryId: new ObjectId(categoryId) }
    const product = await productsCollection.find(query).toArray()

    res.status(200).send(product)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
