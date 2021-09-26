import { NextApiRequest, NextApiResponse } from 'next';
import { initFirebaseAuth } from '../../utils/initFirebaseAuth';
import { promiseWrapper } from '@frappe/common/utils';
import { unsetAuthCookies } from 'next-firebase-auth';

initFirebaseAuth();

const logoutRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const [error, response] = await promiseWrapper(unsetAuthCookies(req, res));

  if (error !== null) {
    console.error(error);

    return res.status(500).json(error);
  }

  console.log(`Logout: `, response);
  return res.status(200).json({ status: true })
}

export default logoutRoute;
