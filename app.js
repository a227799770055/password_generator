const express = require('express')
const app = express()
const exphd = require('express-handlebars')
const bodyParse = require('body-parser')
const generatePassword = require('./generatorPassword')
const port = 3000

app.use(bodyParse.urlencoded({ extend: true }))

// setting engine 
app.engine('handlebars', exphd({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  password = generatePassword(options)
  res.render('index', { password: password, options: options })
})


app.listen(port, () => {
  console.log('server is listening')
})