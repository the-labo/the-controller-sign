/**
 * Mix up controller class with sign check feature
 * @function mixSignCheck
 * @param {function} BaseClass
 * @param {Object} [options={}] - Optional settings
 * @param {string[]} [options.only=null] - Action names to apply.
 * @returns {function} Mixed class
 */
'use strict'

const { USER_SESSION_KEY } = require('./Constants')
const { TheUnauthorizedError } = require('the-error')

/** @lends mixSignCheck */
function mixSignCheck (BaseClass, options = {}) {
  let { only = null } = options
  if (only && only.length === 0) {
    console.warn('You are passing an empty array to `only`, which will never match any action')
  }
  class SignCheckMixed extends BaseClass {
    static async beforeInvocation (invocation) {
      if (super.beforeInvocation) {
        await super.beforeInvocation(invocation)
      }
      let { target, action } = invocation
      let skip = only && !only.includes(action)
      if (skip) {
        return
      }
      let user = target.session[ USER_SESSION_KEY ]
      if (!user) {
        throw new TheUnauthorizedError(`Signin required for action: "${action}"`)
      }
    }
  }
  return SignCheckMixed
}

module.exports = mixSignCheck
