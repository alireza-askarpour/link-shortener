import { Request, Response, NextFunction } from "express"
import createHttpError from "http-errors"
import dotenv from "dotenv"
import chalk from "chalk"

dotenv.config()

export const isDevelopment = process.env.NODE_ENV === "development"
export const isProduction = process.env.NODE_ENV === "production"

export const port = process.env.PORT || 8000
export const mode = process.env.NODE_ENV || "development"

export const appListener = () => {
  const runningMode = `Server running in ${chalk.bold(mode)} mode`
  const runningOnPort = `on port ${chalk.bold(port)}`
  const runningSince = `[since ${new Date().toISOString()}]`
  console.log(`🏁 —> ${runningMode} ${runningOnPort} ${runningSince}`)
}

export const appErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const serverError = createHttpError.InternalServerError()
  const status: number = err.status || serverError.status
  const message: string = err.message || serverError.message

  res.status(status).json({ success: false, status, message })
}
