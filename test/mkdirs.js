var Fsep = require('../index.js');

var path = '/Users/Alex/test/stuff/';

Fsep.mkdirs(path).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
