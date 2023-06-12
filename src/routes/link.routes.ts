import express from "express"
import * as linkController from "../controller/link.controller"

const router = express.Router()

router.post("/:originalLink", linkController.createShortLink)

export default router
