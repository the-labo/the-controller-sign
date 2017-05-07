/**
 * Sign controller for the-server
 * @module the-controller-sign
 */
'use strict'

const TheSignCtrl = require('./TheSignCtrl')
const mixSignCheck = require('./mixSignCheck')
const Constants = require('./Constants')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, Constants, {
  TheSignCtrl,
  mixSignCheck,
  Constants,
  create
})

module.exports = lib
