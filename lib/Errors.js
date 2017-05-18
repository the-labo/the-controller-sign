/**
 * @namespace Errors
 */
'use strict'

const { define } = require('the-error')

exports.PasswordWrongError = define('PasswordWrongError', {
  status: 400
})

exports.SigninFailedError = define('SigninFailedError', {
  status: 400
})