// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from '../../../../lib/mongodb'

export default async function getAllProducts(req, res) {
  try {
    const client = await clientPromise
    const productsCollection = client.db('pc-builder').collection('products')
    const products = await productsCollection.find({}).toArray()

    res.status(200).send(products)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
