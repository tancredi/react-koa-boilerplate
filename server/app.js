var App = require('koa')
var staticDir = require('koa-static')
var routes = require('./routes')
var clientEntry = require('./middleware/client-entry')
var methods = require('./middleware/methods')
var body = require('koa-better-body')

/*
 * Server module
 *
 * Configures and runs the API server
 */

module.exports = new App()

.use(body({ multipart: true }))
.use(methods)
.use(routes.routes())
.use(staticDir('./www'))
.use(clientEntry)