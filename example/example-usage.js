'use strict'

const { TheSignCtrl } = require('the-controller-sign')
const theServer = require('the-server')

async function tryExample () {

  let server = theServer({ /*...*/ })

  server.register(
    class extends TheSignCtrl { /* ... */},
    'some'
  )

  server.listen(3000)
}

tryExample().catch((err) => console.error(err))
