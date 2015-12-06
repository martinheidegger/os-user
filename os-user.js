'use strict'

var isWindows = process.platform === 'win32'
var method

module.exports = function (cb) {
  if (!method) {
    method = require('exec-fallback')(function () {
      return isWindows ? process.env.USERDOMAIN + '\\' + process.env.USERNAME : process.env.USER
    }, 'whoami')
  }
  method(cb)
}
