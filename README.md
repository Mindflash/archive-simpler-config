#simple-config

A simple config module. You _init() it once with an object and require and use it everywhere else.

[![Build Status](https://travis-ci.org/maxnachlinger/simple-config.png?branch=master)](https://travis-ci.org/maxnachlinger/simple-config)

### Installation:
```
npm install simple-config
```
### Usage:
 _init() takes an object, so there are loads of ways to call it
 
```javascript
var config = require('simple-config')._init(require('./config/config.js'));
// OR
var config = require('simple-config')._init({someKey: 'Some Value'}));
// OR
var fs = require('fs');
var config = require('simple-config')._init(
	JSON.parse(fs.readFileSync(__dirname + '/config.json'))
);
// OR
var config = require('../')._init({
	dev: require('./dev.js')
	qa: require('./qa.js')
}[process.env.name]);

// meanwhile, in another file in a directory far far away
var config = require('simple-config');
console.log(config.someKey); // etc
```

### License
You're kidding right?
