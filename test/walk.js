'use strict';

const Fsep = require('../index');

const path = '/Users/Alex/Desktop';

const options = {
	relative: false,
	ignoreDot: true,
	filters: ['.DS_Store', 'node_modules']
};

Fsep.walk(path, options).then(function (files) {
	console.log(files);
}).catch(function (error) {
	console.error(error);
});
