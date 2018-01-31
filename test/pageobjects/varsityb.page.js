var page = require('./page');

var varsitybPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'VARSITY B CLUB'; } },
	phoneNumberString: { get: function () { return '208-426-5440'; } },
	emailAddressString: { get: function () { return 'VARSITYB@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ALLEN NOBLE HALL OF FAME 1910 UNIVERSITY DRIVE, BOISE, ID 83725'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = varsitybPage;
