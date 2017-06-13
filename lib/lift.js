
function liftOne (method) {
	return function () {
		var args = Array.prototype.slice.call(arguments);

		return new Promise(function (resolve, reject) {

			args.push(function(error, data) {
				if (error) {
					return reject(error);
				} else {
					return resolve(data);
				}
			});

			method.apply(null, args);

		});
	};
}

function liftAll (source) {
	var target = source.constructor();

	Object.keys(source).forEach(function (key) {
		if (key.indexOf('Sync') !== key.length-4 && typeof source[key] === 'function') {
			target[key] = liftOne(source[key]);
		} else {
			target[key] = source[key];
		}
	});

	return target;
}

module.exports = function (data) {
	if (data === undefined || data === null) {
		return undefined;
	} else if (typeof data === 'function') {
		return liftOne(data);
	} else if (typeof data === 'object') {
		return liftAll(data);
	}
};
