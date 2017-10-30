'use strict';

const Fs = require('fs');
const ReadLine = require('readline');

module.exports = function (options) {
	if (!options) options = {};
	if (!options.read.path) throw new Error('readWriteLine: requires readPath');
	if (!options.write.path) throw new Error('readWriteLine: requires writePath');
	if (!options.read.encoding) options.read.encoding = 'utf8';
	if (!options.write.encoding) options.read.encoding = 'utf8';
	if (!options.read.flag) options.read.flag = 'a+';
	if (!options.write.flag) options.read.flag = 'a+';

	return new Promise(function (resolve, reject) {
		const readStream = Fs.createReadStream(options.read.path, options.read);
		const writeStream = Fs.createWriteStream(options.write.path, options.write);

		writeStream.readable = true;
		writeStream.writable = true;

		const rl = ReadLine.createInterface(readStream, writeStream);

		rl.on('error', function (error) {
			reject(error);
		});

		rl.on('line', function(line) {
			if (options.line) line = options.line(line) || line;
			rl.output.write(line + '\n');
		});

		rl.on('close', function() {
			resolve();
		});

	});

};
