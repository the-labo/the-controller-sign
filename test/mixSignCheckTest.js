/**
 * Test for mixSignCheck.
 * Runs with mocha.
 */
'use strict'

const mixSignCheck = require('../lib/mixSignCheck')
const { TheCtrl } = require('the-controller-base')
const { ok, equal } = require('assert')

describe('mix-sign-check', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let Ctrl = mixSignCheck(class extends TheCtrl {
      foo () {
        return 'This is foo'
      }

      bar () {
        return 'This is bar'
      }
    }, { only: [ 'foo' ] })

    let ctrl = new Ctrl({
      app: {},
      session: {}
    })

    await Ctrl.beforeInvocation({
      target: ctrl,
      action: 'bar'
    })

    let caught = await Ctrl.beforeInvocation({
      target: ctrl,
      action: 'foo'
    }).catch((err) => err)
    equal(caught.name, 'UnauthorizedError')
  })
})

/* global describe, before, after, it */
