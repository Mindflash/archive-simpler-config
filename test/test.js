var fs = require('fs');
var util = require('util');
var test = require('tap').test;

test('Handles a simple object as a config', function (t) {
	var config = require('..')._init({
		name: 'test'
	});
	console.log(config);
	t.equal(config.name, 'test', 'config: '+util.inspect(config));
	t.end();
});

test('Handles a loaded and parsed JSON object as a config', function (t) {
	fs.readFile(__dirname + '/config.json', function (err, json) {
		t.notOk(err);
		var config = require('../')._init(JSON.parse(json));

		t.equal(config.name, 'test');
		t.deepEqual(config.complexKey.aKey, [{"type": "test"}]);
		t.end();
	});
});

test('Handles a loaded JS object as a config', function (t) {
	var config = require('../')._init(require('./config.js'));

	t.equal(config.name, 'test');
	t.deepEqual(config.complexKey.aKey, [{"type": "test"}]);
	t.end();
});

test('Fancy', function (t) {
	var config = require('../')._init({
		dev: {name: 'test'},
		qa: require('./config.js')
	}['dev']);

	t.equal(config.name, 'test');
	t.end();
});
