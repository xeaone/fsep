'use strict';

const Fs = require('fs');
const Util = require('util');

module.exports = Util.promisify(Fs.rmdir);
