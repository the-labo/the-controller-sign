/**
 * Test for TheSignCtrl.
 * Runs with mocha.
 */
'use strict'

const TheSignCtrl = require('../lib/TheSignCtrl')
const { ok, equal, throws, doesNotThrow } = require('assert')
const theDb = require('the-db')
const { TheUserResource } = require('the-resource-user')

describe('the-sign-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let db = theDb({ dialect: 'memory' })

    db.load(TheUserResource, 'User')
    db.load(TheUserResource.Sign, 'UserSign')

    let ctrl = new TheSignCtrl({
      app: { db },
      session: {}
    })
    ok(ctrl)

    equal((await ctrl.assertSigned().catch((e) => e)).name, 'UnauthorizedError')
    await ctrl.signup('foobar', 'xxx')
    let user = await ctrl.signin('foobar', 'xxx')
    equal(user.name, 'foobar')

    await ctrl.assertSigned()

    await ctrl.assertPassword('xxx')

    ok(await ctrl.getSigned())
    await ctrl.signout()
    ok(!(await ctrl.getSigned()))
  })
})

/* global describe, before, after, it */
