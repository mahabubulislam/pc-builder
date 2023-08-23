import { ObjectId } from 'mongodb'
import clientPromise from '../../../../lib/mongodb'

export default async function singleProduct(req, res) {
  try {
    const client = await clientPromise
    const productsCollection = client.db('pc-builder').collection('products')
    const { productId } = req.query
    const query = { _id: new ObjectId(productId) }
    const product = await productsCollection.findOne(query)

    res.status(200).send(product)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
