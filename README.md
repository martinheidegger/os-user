# os-user [![Build Status](https://travis-ci.org/martinheidegger/os-user.svg?branch=master)](https://travis-ci.org/martinheidegger/os-user)

Simple [node.js](https://nodejs.org/) util that returns the user currently running on the system.

On windows this util is aware of the domain using the `USERDOMAIN` and `USERNAME` variable.

On other systems it uses the `USER` environment variable. If the `USER` is not given or empty on other systems it will fallback to `whoami`.

# Usage 

Install with:

```
$ npm i os-user --save
```

and use it with:

```JavaScript
var user = require('os-user')
user(function (err, usr) {
    console.log(usr)
})
```


cheers.

## Caching & Invalidation

By default the user is cached for 10 minutes it is possible to invalidate the cache using:

```JavaScript
user.invalidate()
```

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)

first version extracted from [osenv](https://github.com/npm/osenv)