// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { newsLetterMail } = req.body;

  try {
    return res.send("✅ Subscribed");
  } catch (error) {
    return res.send("❌ Failed to Subscribe");
  }
}
