var page = require('./page');

var registrarPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'OFFICE OF THE REGISTRAR'; } },
	phoneNumberString: { get: function () { return '(208) 426-4249'; } },
	emailAddressString: { get: function () { return 'REGMAIL@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ADMINISTRATION BUILDING, ROOM 110'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = registrarPage;
