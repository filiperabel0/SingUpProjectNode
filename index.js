import bodyParser from 'body-parser';
import express from 'express';
import controller from './controller/controller.js'

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extend: true}))
app.get('/', controller.listar)
app.post('/post', controller.cadastrar)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})