const EnsureFile = require('./ensure-file');
const Path = require('path');

function scaffold (path, data) {
	var promises = [];

	if (data.constructor.name === 'Array') {
		Array.prototype.push.apply(
			promises,
			array(path, data)
		);
	}

	if (data.constructor.name === 'Object') {
		Array.prototype.push.apply(
			promises,
			object(path, data)
		);
	}

	return promises;
}

function array (path, data) {
	var promises = [];
	var i = 0;
	var l = data.length;

	for (i; i < l; i++) {
		var name = data[i];
		promises.push(
			EnsureFile(
				Path.join(path, name),
				''
			)
		);
	}

	return promises;
}

function object (path, data) {
	var promises = [];

	for (var key in data) {
		var value = data[key];

		if (!value) throw new Error('Fsep.scaffold: missing file name');

		if (value.constructor.name === 'String') {
			promises.push(
				EnsureFile(
					Path.join(path, key, value),
					''
				)
			);
		} else if (value.constructor.name === 'Array') {
			Array.prototype.push.apply(
				promises,
				array(
					Path.join(path, key),
					value
				)
			);
		} else if (value.constructor.name === 'Object') {
			Array.prototype.push.apply(
				promises,
				scaffold(
					Path.join(path, key),
					value
				)
			);
		}
	}

	return promises;
}

module.exports = function (path, data) {
	if (!data) {
		throw new Error('Fsep.scaffold: mising required argument');
	}

	return Promise.all(scaffold(path, data));
};
