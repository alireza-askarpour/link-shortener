import express, { NextFunction, Request } from "express"
import createError from "http-errors"
import dotenv from "dotenv"
import cors from "cors"

import { appListener, appErrorHandler } from "../src/config/app.config"
import allRoutes from "./routes/index.routes"

// config
dotenv.config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// auth
app.use(cors({ origin: "*" }))

// routes
app.use(allRoutes)

// error handler
app.use((req: Request, _, next: NextFunction) => {
  next(createError.NotFound(`Can't find ${req.originalUrl} on server!`))
})
app.use(appErrorHandler)

app.listen(process.env.PORT, appListener)
