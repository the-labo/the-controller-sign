/**
 * Sign controller for the-server
 * @module the-controller-sign
 */
'use strict'

const TheSignCtrl = require('./TheSignCtrl')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheSignCtrl,
  create
})

module.exports = lib
