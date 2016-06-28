/**
 * Methods middleware
 *
 * Attaches useful methods to controllers
 */

/**
 * Bind and attach validate method to controller
 *
 * @return {void}
 */
module.exports = function * (next) {
  // Always fill fields and fiels in request body
  this.request.body = this.request.body || {}
  this.request.body.fields = this.request.body.fields || {}
  this.request.body.files = this.request.body.files || {}

  // Attach methods to controller
  this.param = param.bind(this)

  // Continue
  yield next
}

/**
 * Get a parameter from body, query or params
 *
 * @param  {String} key
 * @return {*}
 */
function param(key) {
  return (
    this.params[key] ||
    this.request.body.fields[key] ||
    this.request.query[key] ||
    null
    )
}