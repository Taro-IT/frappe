import { wrapError } from "@frappe/common/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { unsetAuthCookies } from "next-firebase-auth";
import { initAuth } from "../../utils/initAuth";

initAuth()
const logOutApiRoute = async (req:NextApiRequest, res:NextApiResponse) => {
    const [error] = await wrapError(unsetAuthCookies(req,res))
    if (error !== null) {
        return res.status(500).json({error:error.message})
    }
    return res.status(200).json({ok:true})
}

export default logOutApiRoute