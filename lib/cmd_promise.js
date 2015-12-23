var _ = require('lodash');
var Promise = require('bluebird/js/release/promise')();
var spawn = require('cross-spawn');

var promised = function(fn) {
	return function() {
		var args = [].slice.call(arguments);

		var self = this;

		return Promise.all(args).then(
			function(args) {
				return fn.apply(self, args);
			}
		);
	};
};

var run = function(cmd, args) {
	return new Promise(
		function(resolve, reject) {
			function makeResult(e) {
				var ret = e instanceof Error ? e : new Error(e + '');

				ret.stdout = out.trim();
				ret.stderr = err.trim();

				return ret;
			}

			var out = '';
			var err = '';

			var child = spawn(
				cmd,
				args,
				{
					stdio: ['pipe', 'pipe', 'pipe'],
					cwd: process.cwd()
				}
			);

			child.stdout.on(
				'data',
				function(data) {
					out += data;
				}
			);

			child.stderr.on(
				'data',
				function(data) {
					err += data;
				}
			);

			child.on(
				'error',
				function(err) {
					reject(makeResult(err));
				}
			);

			child.on(
				'close',
				function(code) {
					if (code == 0) {
						resolve(makeResult())
					}
					else {
						reject(makeResult(cmd + ' ' + args.join(' ') + ' exited with code: ' + code + '\n' + err.trim()));
					}
				}
			);
		}
	);
}

Promise.prototype.cmd = promised(
	function() {
		var args = [].slice.call(arguments);

		var cmd = args.shift();

		return this.then(
			function() {
				return run(cmd, args);
			}
		);
	}
);

Promise.prototype.git = function() {
	var args = [].slice.call(arguments);

	args.unshift('git');

	return this.cmd.apply(this, args);
};

module.exports = Promise;