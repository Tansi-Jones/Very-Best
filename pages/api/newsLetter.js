import dbConnect from "../../lib/dbConnect";
import Subscriber from "../../models/Subscriber";

export default async function handler(req, res) {
  const { subscriberMail } = req.body;
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const subscribers = await Subscriber.create(subscriberMail);
        // res.status(201).json({ success: true });

        res.send("✅ Subscribed");
      } catch (error) {
        // res.status(400).json({ success: false });
        res.send("❌ Failed to Subscribe");
      }
    default:
    // res.status(400).json({ success: false });
  }
}
