"use strict";
var load = function(config) {
	for(var key in config)
		module.exports[key] = config[key];

	module.exports = config;
	module.exports.load = load;

	// Flush out any old simpler-configs since they've changed
	Object.keys(require.cache).forEach(function(key) {
		if(~key.indexOf('simpler-config'))
			delete require.cache[key];
	});

	return config;
};
module.exports.load = load;
