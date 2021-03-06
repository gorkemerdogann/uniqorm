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
const DataField = require('../DataField');

/**
 *
 * @class
 * @extends DataField
 */
class TIMESTAMP extends DataField {

  //noinspection JSMethodCanBeStatic
  /**
   *
   * @return {string}
   * @override
   */
  get jsType() {
    return 'Date';
  }

  //noinspection JSMethodCanBeStatic
  /**
   *
   * @return {string}
   * @override
   */
  get sqlType() {
    return 'TIMESTAMP';
  }

  /**
   * @type {Date}
   * @override
   */
  get defaultValue() {
    return super.defaultValue;
  }

  /**
   * @param {Date} value
   * @override
   */
  set defaultValue(value) {
    super.defaultValue = value == null ? value :
        (value instanceof Date ? value : new Date(value));
  }

}

/**
 * Expose `TIMESTAMP`.
 */
module.exports = TIMESTAMP;
