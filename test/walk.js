'use strict';

var Fsep = require('../index');

var options = {
	path: '/Users/Alex/Desktop',
	ignoreDot: true,
	relative: true,
	filters: ['.DS_Store', 'node_modules']
};

// path || path, options || options
Fsep.walk(options).then(function (data) {
	console.log(data);
})
.catch(function (error) {
	throw error;
});
