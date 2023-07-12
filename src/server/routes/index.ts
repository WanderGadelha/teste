import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { cidadesControllers } from './../controllers'

const router = Router()


router.post('/', (req, res)=> {
  return res.send('Hello, World')
})

router.post('/cidades', cidadesControllers.creteValidation, cidadesControllers.create)

export { router }