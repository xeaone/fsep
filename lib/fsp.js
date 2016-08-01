'use strict';

const WhenNode = require('when/node');
const Fs = require('fs');

module.exports = WhenNode.liftAll(Fs);
