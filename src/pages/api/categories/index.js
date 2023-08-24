import clientPromise from '../../../../lib/mongodb'

export default async function getCollections(req, res) {
  try {
    const client = await clientPromise

    const categoriesCollection = client
      .db('pc-builder')
      .collection('categories')
    const categories = await categoriesCollection
      .find({})
      .sort({ index: 1 })
      .toArray()

    res.status(200).send(categories)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
