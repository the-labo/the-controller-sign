/**
 * Sign controller for the-server
 * @module the-controller-sign
 */
'use strict'

const TheSignCtrl = require('./TheSignCtrl')
const mixSignCheck = require('./mixSignCheck')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheSignCtrl,
  mixSignCheck,
  create
})

module.exports = lib
