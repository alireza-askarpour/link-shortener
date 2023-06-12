import createError from "http-errors"
import HttpStatus from "http-status-codes"
import { Request, Response } from "express"

import LinkModel from "../models/link.model"
import { catchAsync } from "../utils/catch-async"
import { alphabetLetters, alphabetNumber, nanoid } from "../utils/nanoid"

/**
 * Create short link
 */
export const createShortLink = catchAsync(
  async (req: Request, res: Response) => {
    const { originalLink } = req.params

    if (!originalLink) throw createError.BadRequest("INVALID_ORIGINAL_LINK")

    const shortLink = `${process.env.BASE_URL}/${nanoid(
      alphabetLetters + alphabetNumber
    )}`

    const result = await LinkModel.create({ originalLink, shortLink })
    if (!result)
      throw createError.InternalServerError("FAILED_CREATE_SHORT_LINK")

    res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      success: true,
      shortLink,
    })
  }
)
