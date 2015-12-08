'use strict'
var tap = require('tap')
var exec = require('child_process').exec
var user = require('..')

if (process.platform === 'win32') {
  tap.test('basic windows test', function (t) {
    process.env.USERDOMAIN = 'knights'
    process.env.USERNAME = 'sirUser'
    user(function (err, user) {
      t.equal(err, null)
      t.equal(user, 'knights//sirUser')
      t.end()
    })
  })
  // Note: on windows it will always at least return '//' and as an logical result it will never run whoami
} else {
  tap.test('basic unix test', function (t) {
    process.env.USER = 'sirUser'
    user(function (err, user) {
      t.equal(err, null)
      t.equal(user, 'sirUser')
      t.end()
    })
  })

  tap.test('fallback unix test', function (t) {
    delete process.env.USER
    exec('whoami', function (err, whoamiresponse) {
      t.equal(err, null)
      user.invalidate()
      user(function (err, user) {
        t.equal(err, null)
        t.equal(user, whoamiresponse.trim())
        t.end()
      })
    })
  })
}
