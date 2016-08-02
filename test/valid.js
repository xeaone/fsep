'use strict';

var Fsep = require('../index');

var path = '/Users/Alex/Desktop';

Fsep.valid(path).then(function (exist) {
	console.log(exist);
})
.catch(function (error) {
	throw error;
});
