/**
 * Sign controller for the-server
 * @augments TheCtrl
 * @class TheSignCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')

/** @lends TheSignCtrl */
class TheSignCtrl extends TheCtrl {
  /**
   * Sign up
   * @param {string} name - Name to identify user
   * @param {string} password - Password
   * @param {Object} [options={}] - Optional settings
   * @returns {Promise.<Object>} User
   */
  async signup (name, password, options = {}) {
    const s = this
    const { db } = s.app
    const {
      User,
      UserSign,
      UserProfile
    } = db.resources
    let { email, profile = {} } = options
    let user = await User.create({ name, email })
    user.sign = await UserSign.create({ user, password })
    user.profile = await UserProfile.create({ user, profile })
    await user.save()
    return s.signin(name, password)
  }

  /**
   * Signin
   * @param {string} name - Name to identify user
   * @param {string} password - Password
   * @param {Object} [options={}] - Optional settings
   * @returns {Promise}
   */
  async signin (name, password, options = {}) {
    const s = this
    const { db } = s.app
    const { User } = db.resources
    let user = await User.only({ name })
    let valid = s.testPassword(user, password)
    if (!valid) {
      throw new Error('Signin failed!')
    }
    await user.sync()
    s.session.signed = user
    return user
  }

  /**
   * Signout
   * @returns {Promise}
   */
  async signout () {
    const s = this
    let hasSigned = Boolean(s.session.signed)
    delete s.session.signed
    return hasSigned
  }

  async testPassword (user, password) {
    const s = this
    const { db } = s.app
    const { UserSign } = db.resources
    let sign = user && await UserSign.only({ user })
    let valid = sign && await sign.testPassword(password)
    return valid
  }
}

module.exports = TheSignCtrl
