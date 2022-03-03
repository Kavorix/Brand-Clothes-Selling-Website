import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
type Data = {
  message: string;
};

export default async function ProductCategory(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
    );

    const db = client.db();
    const cartClt = db.collection("cart");
    await cartClt.updateOne(
      {},
      {
        $set: {
          items: data.items,
          totalQuantity: data.totalQuantity,
          totalAmount: data.totalAmount,
        },
      }
    );

    client.close();

    res.status(201).json({ message: "Send cart to database successfully" });
  }
}
