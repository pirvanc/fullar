
var express = require('express')

var app = express()

var test = ''

app.get('/Helloworls', function(req, res) {
  res.json({notes: "Hello World!"})
})

app.listen(3000)
