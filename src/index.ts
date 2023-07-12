import { server } from './server/Server'
import 'dotenv/config'

server.listen(process.env.PORT, () => {
  console.log(`Servidor Rodand na porta ${process.env.PORT|| 3000}`)
  
})