#simpler-config

A simple config module. You _init() it once with an object and require and use it everywhere else.

[![Build Status](https://travis-ci.org/maxnachlinger/simpler-config.png?branch=master)](https://travis-ci.org/maxnachlinger/simpler-config)

### Installation:
```
npm install simpler-config
```
### Usage:
 _init() takes an object, so there are loads of ways to call it
 
```javascript
var config = require('simpler-config')._init(require('./config/config.js'));
// OR
var config = require('simpler-config')._init({someKey: 'Some Value'}));
// OR
var fs = require('fs');
var config = require('simpler-config')._init(
	JSON.parse(fs.readFileSync(__dirname + '/config.json'))
);
// OR
var config = require('simpler-config')._init({
	dev: require('./dev.js')
	qa: require('./qa.js')
}[process.env.name]);

// meanwhile, in another file in a directory far far away
var config = require('simpler-config');
console.log(config.someKey); // etc
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Max Nachlinger

