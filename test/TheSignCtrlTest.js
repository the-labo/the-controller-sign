/**
 * Test for TheSignCtrl.
 * Runs with mocha.
 */
'use strict'

const TheSignCtrl = require('../lib/TheSignCtrl')
const { ok, equal } = require('assert')

describe('the-sign-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    let ctrl = new TheSignCtrl()
    ok(ctrl)
  })
})

/* global describe, before, after, it */
