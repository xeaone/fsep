const PromiseTool = require('promise-tool');
const Fs = require('fs');

module.exports = PromiseTool.lift(Fs);
