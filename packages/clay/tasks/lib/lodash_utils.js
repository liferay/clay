var _ = require('lodash');

var REGEX_SUB = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;

_.mixin(
	{
		cached: function(fn) {
			return _.memoize(
				fn,
				function() {
					return (arguments.length > 1) ? Array.prototype.join.call(arguments, '_') : String(arguments[0]);
				}
			);
		},

		sub: function(string, data) {
			if (arguments.length > 2 || !_.isObject(data)) {
				data = _.toArray(arguments).slice(1);
			}

			return string.replace ? string.replace(
				REGEX_SUB,
				function(match, key) {
					return _.isUndefined(data[key]) ? match : data[key];
				}
			) : string;
		}
	}
);

module.exports = _;