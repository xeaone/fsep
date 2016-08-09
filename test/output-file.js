var Fsep = require('../index');

var path = '/test/stuff/blue.js';
var data = 'hello';

Fsep.outputFile(path, data).then(function () {
	console.log('done');
}).catch(function (error) { throw error; });
