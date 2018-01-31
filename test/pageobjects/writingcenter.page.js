var page = require('./page');

var writingcenterPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'BOISE STATE WRITING CENTER'; } },
	phoneNumberString: { get: function () { return '(208) 426-1298'; } },
	emailAddressString: { get: function () { return 'WRITING@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'LIBERAL ARTS BUILDING, ROOM 200'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = writingcenterPage;
