/* global it, apiTests, endpoint */

/*
 * Server tests
 *
 * Basic server tests
 */

apiTests('Server', () => {

  it('can be pinged', function * () {
    yield endpoint.get('/api/ping').expect(200, 'pong')
  })

  it('responds with 404 to unexisting endpoints', function * () {
    yield endpoint.get('/api/i-dont-exist').expect(404, 'Not Found')
  })

})