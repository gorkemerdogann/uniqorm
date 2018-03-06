/* UNIQORM
 ------------------------
 (c) 2017-present Panates
 UNIQORM may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/uniqorm/
 */

/**
 * Module dependencies
 * @private
 */
const {EventEmitter} = require('events');
const errorex = require('errorex');
const Model = require('./Model');

/**
 * Module variables
 * @private
 */
const ArgumentError = errorex.ArgumentError;

/**
 * @class
 * @extends EventEmitter
 */
class Uniqorm extends EventEmitter {

  /**
   * @param {Object} [sqbPool]
   * @param {Object} options
   * @param {Boolean} options.silent
   * @constructor
   * @public
   */
  constructor(sqbPool, options) {
    super();
    if (!(sqbPool && typeof sqbPool.select === 'function')) {
      options = sqbPool;
      sqbPool = undefined;
    }
    if (sqbPool)
      this.pool = sqbPool;
    this.models = {};
    this.options = options || {};
  }

  /**
   * Creates a new Model
   *
   * @param {String} name
   * @param {Object} modelDef
   * @return {Model}
   * @public
   */
  define(name, modelDef) {
    if (typeof name !== 'string')
      throw new ArgumentError('A string value required for model name');
    if (this.models[name])
      throw new ArgumentError('Model `%s` already exists', name);
    const model = this.models[name] = new Model(this, name, modelDef);
    this.emit('define', name, model);
    return model;
  }

  /**
   * Returns Model constructor
   *
   * @param {string} [name]
   * @return {Function|undefined}
   * @public
   */
  get(name) {
    const model = this.models[name];
    if (!model)
      throw new Error('Model "' + name + '" not found');
    return model;
  }
}

/**
 * Expose `Uniqorm`.
 */
module.exports = Uniqorm;