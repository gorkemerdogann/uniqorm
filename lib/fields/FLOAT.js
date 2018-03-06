/* UNIQORM
 ------------------------
 (c) 2017-present Panates
 UNIQORM may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/uniqorm/
 */

/**
 * Module dependencies.
 * @private
 */
const DOUBLE = require('../fields/DOUBLE');

/**
 * Expose `FLOAT`.
 */
module.exports = FLOAT;

/**
 * @param {String} alias
 * @param {Object} def
 * @constructor
 * @extends Field
 */
function FLOAT(alias, def) {
  DOUBLE.apply(this, arguments);
}

FLOAT.prototype = {
  /**
   *
   * @return {string}
   * @constructor
   */
  get SqlType() {
    return 'FLOAT';
  }
};

Object.setPrototypeOf(FLOAT.prototype, DOUBLE.prototype);
FLOAT.prototype.constructor = FLOAT;