'use strict'
var tap = require('tap')
var execSync = require('child_process').execSync

if (process.platform === 'win32') {
  tap.test('basic windows test', function (t) {
    process.env.USERDOMAIN = 'knights'
    process.env.USERNAME = 'sirUser'
    require('..')(function (err, user) {
      t.equal(err, null)
      t.equal(user, 'knights//sirUser')
      t.end()
    })
  })
  // Note: on windows it will always at least return '//' and as an logical result it will never run whoami
} else {
  tap.test('basic unix test', function (t) {
    process.env.USER = 'sirUser'
    require('..')(function (err, user) {
      t.equal(err, null)
      t.equal(user, 'sirUser')
      t.end()
    })
  })

  tap.test('fallback windows test', function (t) {
    delete process.env.USER
    require.cache = {}
    require('..')(function (err, user) {
      t.equal(err, null)
      t.equal(user, execSync('whoami').toString().trim())
      t.end()
    })
  })
}
