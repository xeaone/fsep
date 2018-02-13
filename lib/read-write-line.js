'use strict';

const Fs = require('fs');
const ReadLine = require('readline');

module.exports = function (options) {

	options = options || {};

	options.read = options.read || {};
	options.write = options.write || {};

	if (!options.read.path) throw new Error('Fsep.readWriteLine - requires options.read.path');
	if (!options.write.path) throw new Error('Fsep.readWriteLine - requires options.write.path');

	options.read.encoding = options.read.encoding || 'utf8';
	options.write.encoding = options.write.encoding || 'utf8';

	options.read.flag = options.read.flag || 'a+';
	options.write.flag = options.write.flag || 'a+';

	return new Promise(function (resolve, reject) {

		const readStream = Fs.createReadStream(options.read.path, options.read);
		const writeStream = Fs.createWriteStream(options.write.path, options.write);

		writeStream.readable = true;
		writeStream.writable = true;

		const rl = ReadLine.createInterface(readStream, writeStream);

		rl.on('error', reject);
		rl.on('close', resolve);

		rl.on('line', function (line) {

			if (options.line) {
				line = options.line(line) || line;
			}
			
			rl.output.write(line + '\n');
		});

	});

};
