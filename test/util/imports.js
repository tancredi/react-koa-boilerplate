/* global before, after, describe */

/*
 * Test Imports module
 *
 * Imports and instanciates all global variables used across tests
 */

var chai = require('chai')
var supertest = require('supertest')
var app = require('../../server/app')
var hooks = require('./hooks')

global.expect = chai.expect
global.should = chai.should
global.endpoint = supertest(app.listen())
global.apiTests = apiTests

/*
 * Wrap describe into preset API before and after hooks
 *
 * @param {String} namespace
 * @param {Function} fn
 */
function apiTests(namespace, fn) {
  describe(namespace, function () {
    before(hooks.before)
    after(hooks.after)
    fn()
  })
}