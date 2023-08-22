// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from '../../../lib/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise

    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
