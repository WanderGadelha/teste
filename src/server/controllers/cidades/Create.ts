import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { I18n } from 'i18n-js'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface ICidade {
  nome : string,
  estado: string
}

export const createBodyValidator: RequestHandler = async (req, res, next) => {

  try {
    await Validation.validate(req.body, { abortEarly: false })
    return next()
  } catch (err) {
    const yupError = err as yup.ValidationError
    const errors: Record<string, string> = {} 

    yupError.inner.forEach(error => {
      if (!error.path) return

      errors[error.path] = error.message
    })

    return res.status(StatusCodes.BAD_REQUEST).json({ errors })
  }

}






export const creteValidation = validation({
  body: yup.object({
    nome: yup.string().required('Nome é um campo obrigatório').min(3),
    estado: yup.string().required('Estado é um campo obrigratorio').min(3)
  }
  ) 
})




export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {    
  console.log(req.body)

  return res.send('create!')
}