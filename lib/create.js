/**
 * Create a TheSignCtrl instance
 * @function create
 * @param {...*} args
 * @returns {TheSignCtrl}
 */
'use strict'

const TheSignCtrl = require('./TheSignCtrl')

/** @lends create */
function create (...args) {
  return new TheSignCtrl(...args)
}

module.exports = create
