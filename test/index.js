'use strict'
var tap = require('tap')
var user = require('../os-user.js')

if (process.platform === 'win32') {
  process.env.USERDOMAIN = 'knights'
  process.env.USERNAME = 'sirUser'

  tap.test('basic windows test', function (t) {
    t.equal(user(), 'knights//sirUser')
    t.end()
  })
} else {
  process.env.USER = 'sirUser'

  tap.test('basic unix test', function (t) {
    t.equal(user(), 'sirUser')
    t.end()
  })
}
