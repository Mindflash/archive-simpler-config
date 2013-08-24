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
// use a JSON file
var config = require('simpler-config')._init(require('./config/config.json'));
// or a JS file (don't forget module.exports)
var config = require('simpler-config')._init(require('./config/config.js'));
// or an object
var config = require('simpler-config')._init({someKey: 'Some Value'}));
// or something far too fancy
var config = require('simpler-config')._init({
	dev: require('./dev.json')
	qa: require('./qa.json')
}[process.env.name]);

// meanwhile, in another file in a directory far far away
var config = require('simpler-config');
console.log(config.someKey); // etc
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Max Nachlinger

