var browserifyLite = require('browserify-lite');

module.exports = function (options) {
	return function (req, res) {
		browserifyLite.renderBundle(options, function (err, output) {
			if (err) {
				res.status(500).send(err.toString());
				return;
			}
			res.type('text/javascript').send(output);
		});
	};
};
