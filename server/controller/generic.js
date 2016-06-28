/*
 * Generic controllers
 *
 * Exports controller functions for general purpose
 */

/**
 * Send 'pong' response back
 *
 * @return {void}
 */
exports.ping = function () {
  this.body = 'pong'
}