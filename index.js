"use strict";
var load = function(config) {
	module.exports = config;
	module.exports.load = load;
	return config;
};
module.exports.load = load;
