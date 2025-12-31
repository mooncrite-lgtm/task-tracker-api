import bcrypt from "bcrypt"
import { prisma } from "../../config/prisma.js"

export async function registerUser({ email, password }) {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    })

    if (existingUser) {
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    })

    return{
        id: user.id,
        email: user.email,
    }
}
