var page = require('./page');

var securityPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'CAMPUS SECURITY & POLICE SERVICES'; } },
	phoneNumberString: { get: function () { return '(208) 426-6911'; } },
	emailAddressString: { get: function () { return 'POLICEUNIVERSITYSECURITY@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '2245 UNIVERSITY DRIVE, BOISE, IDAHO 83706'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = securityPage;
