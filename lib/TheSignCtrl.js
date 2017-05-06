/**
 * Sign controller for the-server
 * @augments TheCtrl
 * @class TheSignCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')
const { TheError, TheUnauthorizedError } = require('the-error')
const { PasswordWrongError } = require('./errors')

/** @lends TheSignCtrl */
class TheSignCtrl extends TheCtrl {
  /**
   * Sign up
   * @param {string} name - Name to identify user
   * @param {string} password - Password
   * @returns {Promise.<UserEntity>} User
   */
  async signup (name, password) {
    const s = this
    const { db } = s.app
    const {
      User,
      UserSign
    } = db.resources
    let user = await User.create({ name })
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
    const { User, UserSign } = db.resources
    let user = await User.only({ name })
    let sign = user && await UserSign.only({ user })
    let valid = sign && await sign.testPassword(password)
    if (!valid) {
      throw TheError('Signin failed!')
    }
    await user.sync()
    s.session.signed = user
    return user
  }

  /**
   * Signout
   * @returns {Promise.<boolean>}
   */
  async signout () {
    const s = this
    let hasSigned = Boolean(await s.getSigned())
    delete s.session.signed
    return hasSigned
  }

  /**
   * Get signed
   * @returns {Promise.<UserEntity>}
   */
  async getSigned () {
    const s = this
    const { db } = s.app
    const { User } = db.resources
    let { signed } = s.session
    if (!signed) {
      return null
    }
    return User.one(signed.id)
  }

  /**
   * Sync signed
   * @returns {Promise.<boolean>}
   */
  async syncSigned () {
    const s = this
    let signed = s.getSigned()
    if (!signed) {
      return false
    }
    s.session.signed = signed
    return true
  }

  /**
   * Assert signed
   * @throws {TheUnauthorizedError} Unless authorized
   * @returns {Promise}
   */
  async assertSigned () {
    const s = this
    let signed = await s.getSigned()
    if (!signed) {
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
    let signed = await s.getSigned()
    if (!signed) {
      throw new TheUnauthorizedError('Not signed')
    }
    let ok = await signed.sign.testPassword(password)
    if (!ok) {
      throw new PasswordWrongError('Failed to test password')
    }
  }
}

module.exports = TheSignCtrl

/** @typedef {Object} UserEntity */
