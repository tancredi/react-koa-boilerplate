var config = require('config')
var app = require('./app')

/*
 * Server entry file
 *
 * Runs the API server
 */

var port = config.get('port')

app.listen(port)
console.log(`\nListening on port ${port}...`)