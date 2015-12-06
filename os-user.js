'use strict'

var isWindows = process.platform === 'win32'

module.exports = function () {
  return isWindows ? process.env.USERDOMAIN + '\\' + process.env.USERNAME : process.env.USER
}
