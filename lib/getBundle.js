'use strict';
var bundle = {};
var bundalo = require('bundalo');
var formatPath = require('kraken-format-path');
var formatter = require('bundalo-intl-formatter');
module.exports = function getBundle(req, res, next) {
	var i18n = res.app.kraken.get('i18n');
	if (Object.keys(bundle).length === 0) {
		bundle.raw = bundalo({contentPath: i18n.contentPath, fallback: i18n.fallback, formatPath: formatPath});
		bundle.fmt = bundalo({contentPath: i18n.contentPath, fallback: i18n.fallback, formatPath: formatPath, formatter: formatter});
	}
	res.bundle = bundle;
	next();
};