'use strict'

var isWindows = process.platform === 'win32'
var execFallback = require('exec-fallback')

module.exports = execFallback(function () {
  return isWindows ? process.env.USERDOMAIN + '\\' + process.env.USERNAME : process.env.USER
}, 'whoami')
