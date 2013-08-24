#simpler-config

A simple config module. You _init() it once with an object and require and use it everywhere else.

[![Build Status](https://travis-ci.org/maxnachlinger/simpler-config.png?branch=master)](https://travis-ci.org/maxnachlinger/simpler-config)

### Installation:
```
npm install simpler-config
```

### What this library solves:
You can always `require()` a JS or JSON file and use that for configuration, in fact for smaller projects, you probably _should_ do that. 
On larger projects, however, requiring a config file everywhere is cumbersome. This silly library allows you to setup your
config once, and then simply `require('simpler-config')` everywhere else in your project to get configuration info.

### Usage:

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

// meanwhile, in another file in a directory far far away
var config = require('simpler-config'); // no need for a path etc
console.log(config.someKey); 
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Max Nachlinger

