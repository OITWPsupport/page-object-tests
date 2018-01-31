var page = require('./page');

var goPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'BOISE STATE UNIVERSITY'; } },
	phoneNumberString: { get: function () { return '(208) 426-1000'; } },
	emailAddressString: { get: function () { return 'COMMUNICATIONS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '1910 UNIVERSITY DRIVE'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = goPage;
