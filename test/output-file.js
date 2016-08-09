'use strict';

var Fsep = require('../index');

var path = '/test/stuff/';

Fsep.outputFile(path).then(function () {

}).catch(function (error) { throw error; });
