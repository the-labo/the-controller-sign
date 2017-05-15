/**
 * Sign controller for the-server
 * @augments TheCtrl
 * @class TheSignCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')
const { TheError, TheUnauthorizedError } = require('the-error')
const { PasswordWrongError } = require('./Errors')

const {
  USER_RESOURCE_NAME,
  USER_SIGN_RESOURCE_NAME,
  USER_SESSION_KEY
} = require('./Constants')

/** @lends TheSignCtrl */
class TheSignCtrl extends TheCtrl {
  /**
   * Sign up
   * @param {string} name - Name to identify user
   * @param {string} password - Password
   * @param {Object} otherAttributes - Other attributes
   * @returns {Promise.<UserEntity>} User
   */
  async signup (name, password, otherAttributes) {
    const s = this
    const { db } = s.app
    const User = db.getResource(USER_RESOURCE_NAME)
    const UserSign = db.getResource(USER_SIGN_RESOURCE_NAME)
    let attributes = Object.assign({}, otherAttributes, { name })
    let user = await User.create(attributes)
    user.sign = await UserSign.create({ user, password })
    await user.save()
    return s.signin(name, password)
  }

  /**
   * Signin
   * @param {string} name - Name to identify user
   * @param {string} password - Password
   * @param {Object} [options={}] - Optional settings
   * @returns {Promise.<UserEntity>}
   */
  async signin (name, password, options = {}) {
    const s = this
    const { db } = s.app
    const User = db.getResource(USER_RESOURCE_NAME)
    const UserSign = db.getResource(USER_SIGN_RESOURCE_NAME)
    let user = await User.only({ name })
    let sign = user && await UserSign.only({ user })
    let valid = sign && await sign.testPassword(password)
    if (!valid) {
      throw new TheError('Signin failed!')
    }
    await user.sync()
    s.session[ USER_SESSION_KEY ] = user
    return user
  }

  /**
   * Signout
   * @returns {Promise.<boolean>}
   */
  async signout () {
    const s = this
    let hasSigned = Boolean(await s.getSigned())
    delete s.session[ USER_SESSION_KEY ]
    return hasSigned
  }

  /**
   * Get signed
   * @returns {Promise.<UserEntity>}
   */
  async getSigned () {
    const s = this
    const { db } = s.app
    const User = db.getResource(USER_RESOURCE_NAME)
    let user = s.session[ USER_SESSION_KEY ]
    if (!user) {
      return null
    }
    return User.one(user.id)
  }

  /**
   * Sync signed
   * @returns {Promise.<boolean>}
   */
  async syncSigned () {
    const s = this
    let user = s.getSigned()
    if (!user) {
      return false
    }
    s.session[ USER_SESSION_KEY ] = user
    return true
  }

  /**
   * Assert signed
   * @throws {TheUnauthorizedError} Unless authorized
   * @returns {Promise}
   */
  async assertSigned () {
    const s = this
    let user = await s.getSigned()
    if (!user) {
      throw new TheUnauthorizedError('Not signed')
    }
  }

  /**
   * Assert password
   * @param password
   * @returns {Promise.<void>}
   */
  async assertPassword (password) {
    const s = this
    const { db } = s.app
    const UserSign = db.getResource(USER_SIGN_RESOURCE_NAME)
    let user = await s.getSigned()
    if (!user) {
      throw new TheUnauthorizedError('Not signed')
    }
    let sign = await UserSign.only({ user })
    let ok = await sign.testPassword(password)
    if (!ok) {
      throw new PasswordWrongError('Failed to test password')
    }
  }
}

module.exports = TheSignCtrl

/** @typedef {Object} UserEntity */
