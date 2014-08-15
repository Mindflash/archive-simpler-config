var util = require('util');
var test = require('tap').test;

test('Handles a simple object as a config', function (t) {
	var config = require('..').load({name: 'test0'});
	console.log(config);
	t.equal(config.name, 'test0', 'config: '+util.inspect(config));
	t.end();
});

test('Handles a loaded and parsed JSON object as a config', function (t) {
	var config = require('../').load(require('./config.json'));
	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.deepEqual(config.complexKey.aKey, [{"type": "testJSON"}]);
	t.end();
});

test('Handles a loaded JS object as a config', function (t) {
	var config = require('../').load(require('./config.js'));

	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.deepEqual(config.complexKey.aKey, [{"type": "testJS"}]);
	t.end();
});

test('A fancy setup', function (t) {
	var config = require('../').load({
		dev: {name: 'testDev'},
		qa: require('./config.js')
	}['dev']);

	t.equal(config.name, 'testDev', 'config: '+util.inspect(config));
	t.end();
});

test('load() works even when invoked out of order', function (t) {
	var config = require('..');
	var someFile = require('./dir0/dir1/someFile.js');
	config.load({name: 'test123'});

	t.deepEqual(someFile.getConfig().name, 'test123');
	t.end();
});
