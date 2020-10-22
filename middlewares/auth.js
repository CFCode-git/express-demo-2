// 5毛鉴权
module.exports = function auth(request, response, next) {
  console.log(request.query)
  if (request.query.username === 'chow') {
    console.log('hi chow')
    next()
  } else {
    response.end('get out')
  }
}
