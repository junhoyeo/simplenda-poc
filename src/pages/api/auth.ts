// nextjs serverless function that receives passcode(string) in post data and returns true if it matchs with string '1234'
import { NextApiRequest, NextApiResponse } from 'next';

import { allowCORS } from '@/middlewares/allowCORS';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { passcode } = req.body;
  if (passcode === 'juno2023') {
    res.status(200).json({ status: true });
  } else {
    res.status(200).json({ status: false });
  }
};

export default allowCORS(handler);
