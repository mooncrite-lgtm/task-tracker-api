import express from "express"
import authRoutes from "./modules/auth/auth.routes.js"

const app = express()

app.use(express.json())
app.use("/auth", authRoutes)

app.get("/health", (req, res) => {
  res.json({ status: "OK" })
})

export default app

import { prisma } from "./config/db.js"

app.get("/db-test", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})
