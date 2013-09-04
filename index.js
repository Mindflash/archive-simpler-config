"use strict"
var load = function(config) {
	for(var key in config) {
		module.exports[key] = config[key];
	}
	module.exports = config;
	module.exports.load = load;
	return config;
};
module.exports.load = load;
