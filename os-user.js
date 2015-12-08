'use strict'

var isWindows = process.platform === 'win32'
var method

function osUser (cb) {
  if (!method) {
    method = require('exec-fallback')(function () {
      return isWindows ? process.env.USERDOMAIN + '\\' + process.env.USERNAME : process.env.USER
    }, 'whoami')
  }
  method(cb)
}
osUser.invalidate = function () {
  if (method) method.invalidate()
}

module.exports = osUser
