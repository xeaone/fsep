'use strict';

var WhenNode = require('when/node');
var Fs = require('fs');

module.exports = WhenNode.liftAll(Fs);
