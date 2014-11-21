var _ = require('lodash');

module.exports = function(list) {
  return list[_.random(list.length - 1)];
}
