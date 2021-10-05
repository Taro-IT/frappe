import { NextApiRequest, NextApiResponse } from "next";
import { wrapError } from "@frappe/common/utils";
import { setAuthCookies } from 'next-firebase-auth';
import { initAuth } from "../../utils/initAuth";

initAuth()
const loginApiRoute = async (req:NextApiRequest,res:NextApiResponse) => {
    const [error, response] = await wrapError(setAuthCookies(req,res));
    if (error !== null) {
        return res.status(500).json({error:error.message})
    }
    return res.status(200).json({token: response.idToken});
}
export default loginApiRoute 