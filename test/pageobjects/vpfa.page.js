var page = require('./page');

var vpfaPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'VICE PRESIDENT FOR FINANCE AND ADMINISTRATION'; } },
	phoneNumberString: { get: function () { return '(208) 426-1200'; } },
	emailAddressString: { get: function () { return 'VPCFO@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ADMINISTRATION BUILDING ROOM A-210'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = vpfaPage;
