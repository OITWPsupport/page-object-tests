var page = require('./page');

var alumniPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'ALUMNI RELATIONS'; } },
	phoneNumberString: { get: function () { return '(208) 426-1698'; } },
	emailAddressString: { get: function () { return 'BSUALUMNI@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '1173 UNIVERSITY DRIVE, BOISE, ID 83706'; } },
	currentthemeversion: { get: function () { return '1.0.1'; } },

});

module.exports = alumniPage;
