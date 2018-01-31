var page = require('./page');

var vpsaPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'STUDENT AFFAIRS & ENROLLMENT MANAGEMENT'; } },
	phoneNumberString: { get: function () { return '208-426-1418'; } },
	emailAddressString: { get: function () { return 'VPSA@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ADMINISTRATION BUILDING, ROOM 208'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = vpsaPage;
