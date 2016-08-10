'use strict';

var Fsep = require('../index');

var path = '/Users/Alex/Desktop';
// var path = '/blaj';

Fsep.valid(path).then(function (isValid) {
	console.log(isValid);
})
.catch(function (error) {
	throw error;
});
