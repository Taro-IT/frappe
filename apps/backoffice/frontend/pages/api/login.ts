import { NextApiRequest, NextApiResponse } from 'next';
import { promiseWrapper } from '@frappe/common/utils';
import { setAuthCookies } from 'next-firebase-auth';
import { initFirebaseAuth } from '../../utils/initFirebaseAuth';

initFirebaseAuth();

const loginRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const [error, response] = await promiseWrapper(setAuthCookies(req, res));

  if (error !== null) {
    console.error(error);
    return res.status(500).json(error);
  }

  console.log(`Login: `, response);
  return res.status(200).json({ status: true });
}

export default loginRoute;
