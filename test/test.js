var fs = require('fs');
var util = require('util');
var test = require('tap').test;

test('Handles a simple object as a config', function (t) {
	var config = require('..')._init({name: 'test'});
	console.log(config);
	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.end();
});

test('Handles a loaded and parsed JSON object as a config', function (t) {
	var config = require('../')._init(require('./config.json'));
	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.deepEqual(config.complexKey.aKey, [{"type": "test"}]);
	t.end();
});

test('Handles a loaded JS object as a config', function (t) {
	var config = require('../')._init(require('./config.js'));

	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.deepEqual(config.complexKey.aKey, [{"type": "test"}]);
	t.end();
});

test('A fancy setup', function (t) {
	var config = require('../')._init({
		dev: {name: 'test'},
		qa: require('./config.js')
	}['dev']);

	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.end();
});

test('Nested files see config values after _init', function (t) {
	var config = require('..')._init({name: 'test'});
	var someFile = require('./dir0/dir1/someFile.js');

	t.deepEqual(someFile.getConfig().name, 'test');
	t.end();
});
