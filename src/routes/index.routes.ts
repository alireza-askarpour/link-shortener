import express from "express"

const router = express.Router()

import linkRoutes from "./link.routes"
import homeRoutes from "./home.routes"

router.use(linkRoutes)
router.use(homeRoutes)

export default router
