import cors from "cors"
import dotenv from "dotenv"
import createError from "http-errors"
import swaggerUI from "swagger-ui-express"
import express, { NextFunction, Request } from "express"

import connectDB from "./config/database.config"
import { swaggerSetup } from "./config/swagger.config"
import { appListener, appErrorHandler } from "./config/app.config"

import { morganMiddleware } from "./middlewares/morgan.middleware"
import allRoutes from "./routes/index.routes"

// config
dotenv.config()
connectDB()

const app = express()

// middlewares
app.use(morganMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// settings
app.use("/docs", swaggerUI.serve, swaggerSetup)

// auth
app.use(cors({ origin: "*" }))

// routes
app.use(allRoutes)

// error handler
app.use((req: Request, _, next: NextFunction) => {
  next(createError.NotFound(`Can't find ${req.originalUrl} on server!`))
})
app.use(appErrorHandler)

// listener
app.listen(process.env.PORT, appListener)
