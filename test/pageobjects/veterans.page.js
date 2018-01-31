var page = require('./page');

var veteransPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'VETERAN SERVICES CENTER'; } },
	phoneNumberString: { get: function () { return '(208) 426-3744'; } },
	emailAddressString: { get: function () { return 'VETERANSERVICES@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '1910 UNIVERSITY DRIVE BOISE ID 83725-1390'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = veteransPage;
