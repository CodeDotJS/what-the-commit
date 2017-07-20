'use strict';

const got = require('got');

module.exports = () => {
	const url = 'http://whatthecommit.com/index.txt';

	return got(url).then(res => {
		return res.body;
	});
};
