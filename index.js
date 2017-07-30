"use strict";

const Program = require('./lib/program');

/**
 * @type {Function}
 */
module.exports = function(baseName) { return new Program(baseName); }