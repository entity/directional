
/**
 * Module dependencies.
 */

var v = require('vector')

/**
 * directional
 */

var directional = module.exports = {
  dir: [v, 0,0]
, update: function (e) {
    e.vel.set(v(e.dir))
  }
}
