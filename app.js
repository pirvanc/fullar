
var express = require('express')

var app = express()

app.get('/', function(req, res) {
  res.json({notes: "Home!"})
})

app.get('/users', function(req, res) {
  res.json({notes: "Hello World!"})
})


app.listen(3000)
