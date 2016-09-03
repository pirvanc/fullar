
var express = require('express')

var app = express()

var test = ''

app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})

app.get('/users', function(req, res) {
  res.json({users: "The GET for the users!"})
})

app.listen(3000)
