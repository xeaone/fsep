'use strict';

const Fsep = require('../index');

const path = __dirname;

const options = {
	relative: false,
	ignoreDot: true,
	filters: ['node_modules']
};

Promise.resolve().then(function () {
	return Fsep.walk(path, options);
}).then(function (files) {
	console.log(files);
}).catch(function (error) {
	console.error(error);
});
