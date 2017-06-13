const Mkdirs = require('./mkdirs');

module.exports = function (path, mode) {
	return Mkdirs(path, mode);
};
