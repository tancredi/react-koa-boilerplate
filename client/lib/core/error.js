/**
 * Error handler module
 *
 * Handle application / http request errors
 */

export default {

  /**
   * Handle error
   *
   * @param  {Error} err
   * @return {void}
   */
  handle(err) {
    console.error('[ HANDLED ]', err.stack)
  }

}