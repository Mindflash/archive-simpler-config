#simpler-config

A simple config module. You `_init()` it once with a config object and simply `require('simpler-config')` everywhere 
else to get configuration.

[![Build Status](https://travis-ci.org/maxnachlinger/simpler-config.png?branch=master)](https://travis-ci.org/maxnachlinger/simpler-config)

### Installation:
```
npm install simpler-config
```
### A few examples:

```javascript
// require the library and then call _init once with an object to setup your config.
// You can use a JSON file
var config = require('simpler-config')._init(require('./config.json'));

// or a JS file (don't forget module.exports)
var config = require('simpler-config')._init(require('./config.js'));

// or an object
var config = require('simpler-config')._init({someKey: 'Some Value'}));

// or something far too fancy
var config = require('simpler-config')._init({
	dev: require('./dev.json')
	qa: require('./qa.json')
}[process.env.name]);

// Right. You get the idea.

// meanwhile, in another file in a directory far far away
var config = require('simpler-config'); // no need for a path etc
console.log(config.someKey); 
```
### Why
For smaller node projects, it's reasonable to simply `require('./config/config.json')` (or a JS file) and use that 
for configuration. On larger projects, however, requiring a config file everywhere is cumbersome for you have to 
constantly tinker with the `require()` paths adding and/or removing `../`'s etc. Designed to avoid this annoyance, 
this library enables you to setup your config once and then simply `require('simpler-config')` everywhere else. 

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Max Nachlinger

