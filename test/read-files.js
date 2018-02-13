const Fsep = require('../index');
const Path = require('path');

const paths = [
	Path.join(__dirname, 'rw/one.txt'),
	Path.join(__dirname, 'rw/two.txt')
];

const options = {
	encoding: 'utf8'
};

Promise.resolve().then(function () {
	return Fsep.readFiles(paths, options);
}).then(function (files) {
	console.log(files);
}).catch(function (error) {
	console.error(error);
});
