var page = require('./page');

var testingPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'BOISE STATE TESTING CENTER'; } },
	phoneNumberString: { get: function () { return '208-426-2762'; } },
	emailAddressString: { get: function () { return 'TESTINGCENTER@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'SIMPLOT MICRON ACADEMIC SUCCESS HUB; 2ND FLOOR; ROOM 213'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = testingPage;
