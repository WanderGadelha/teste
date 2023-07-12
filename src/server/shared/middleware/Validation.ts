import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Schema, ValidationError } from 'yup'

type TProperty = 'body' | 'header' | 'params' | 'query'
type TAllSchemas = Record<TProperty, Schema>


type TValidation = (Schemas: Partial<TAllSchemas>) => RequestHandler

export const validation: TValidation = (Schemas) => async (req, res, next) => {
  console.log(Schemas)

  return next()

  // try {
  //   await Schema.validate(req[field], { abortEarly: false })
  //   return next()
  // } catch (err) {
  //   const yupError = err as ValidationError
  //   const errors: Record<string, string> = {} 

  //   yupError.inner.forEach(error => {
  //     if (!error.path) return

  //     errors[error.path] = error.message
  //   })

  //   return res.status(StatusCodes.BAD_REQUEST).json({ errors })
  // }
}
