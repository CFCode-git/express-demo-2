const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.use(require('./middlewares/auth'))
function mw1() {
  return function (request, response, next) {
    console.log('body')
    console.log(request.body)
    console.log('mw1')
    next()
  }
}

function mw2(request, response, next) {
  console.log('mw2')
  next()
}

function mw3(request, response, next) {
  console.log('mw3')
  next()
}

app.use(mw1())
app.use(mw2, mw3)


// 错误处理中间件
app.use((error, request, response, next) => {
  response.end(error)
})

const server = http.createServer(app)

app.listen(8888)
