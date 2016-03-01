var twilio = require('twilio')('AC5b415a7ef6329a850e7ed759774a12c1', 'b23caaa81a1195231bde48dc6d2af01b')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
	response.send('EAT IS THE SHIT')
})

app.listen(app.get('port'), function() {
	console.log('App is running on port', app.get('port'))
})
