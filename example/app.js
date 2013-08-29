var config = require('../').load(require('./config/config.json'));
var someFile = require('./dir0/dir1/someFile.js');
someFile.run();
