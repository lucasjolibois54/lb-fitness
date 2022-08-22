import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function SecretRoute(req, res) {
    const session = getSession(req,res)
    const user = session.user

    /*noral codee with content here for page*/
})