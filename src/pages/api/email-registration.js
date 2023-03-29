export default function handler(req, res) {
    const { method } = req

    if (method === 'POST') {
        const { email, eventID } = req.body
        res
            .status(200)
            .json({
                message: `Successfully registration with the email: ${email} ${eventID}`
            })
    }
}