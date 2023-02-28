// nextjs serverless function that receives passcode(string) in post data and returns true if it matchs with string '1234'
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { passcode } = req.body;
  if (passcode === 'juno2023') {
    res.status(200).json({ status: true });
  } else {
    res.status(200).json({ status: false });
  }
};

export default handler;
