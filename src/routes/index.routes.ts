import express from "express"

const router = express.Router()

import homeRoutes from "./home.routes"

router.use(homeRoutes)

export default router
