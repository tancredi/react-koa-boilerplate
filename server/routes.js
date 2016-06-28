var Router = require('koa-router')
var controllers = require('./controller/index')

/*
 * API routes module
 *
 * Exports all API endpoints
 */

module.exports = new Router({ prefix: '/api' })

// Generic
.get('/ping', controllers.generic.ping)