var page = require('./page');

var worldlangPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'WORLD LANGUAGES'; } },
	phoneNumberString: { get: function () { return '(208) 426-3956'; } },
	emailAddressString: { get: function () { return 'DIANACARRILLO@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ALBERTSONS LIBRARY L-140B'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = worldlangPage;
