import { registerUser } from "./auth.service.js"

export async function register(req, res) {
    const { email, password } = req.body

    const user = await registerUser({ email, password })

    res.status(201).json(user)
}