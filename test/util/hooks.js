/*
 * Test Hooks
 *
 * Exports global test hooks, automatically invoked when calling 'apiTests'
 */

var initialisedOnce = false

/*
 * Global 'before' hook - Run before all endpoints - Used for global setup
 *
 * @param {Function} done
 */
exports.before = function (done) {
  if (!initialisedOnce) {
    initialisedOnce = true
    beforeAll()
  }

  done()
}

function beforeAll() {
  // Abort if note in 'testing' node environment
  if (process.env.NODE_ENV !== 'testing') {
    console.error('NODE_ENV not set to \'testing\'. Aborting...')
    process.exit()
  }
}

/*
 * Global 'after' hook - Currently not in use
 */
exports.after = function () {
  // Do something...
}