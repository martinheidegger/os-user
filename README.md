# os-user [![Build Status](https://travis-ci.org/martinheidegger/os-user.svg?branch=master)](https://travis-ci.org/martinheidegger/os-user)

Simple [node.js](https://nodejs.org/) util that returns the user currently running on the system.

On windows this util is aware of the domain using the `USERDOMAIN` and `USERNAME` variable.

On other systems it uses the `USER` environment variable.

# Usage 

Install with:

```
$ npm i os-user --save
```

and use it with:

```JavaScript
var user = require('os-user')
console.log(user())
```

# License

[ISC](https://en.wikipedia.org/wiki/ISC_license)

extracted from [osenv](https://github.com/npm/osenv)